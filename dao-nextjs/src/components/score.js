// GitHub Repository Evaluator with Size-Based Categorization


// Repository size categories
const REPO_CATEGORIES = {
    TINY: 'TINY',
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
    EXTRA_LARGE: 'EXTRA_LARGE'
};

export async function evaluateGitHubRepo(repoUrl) {
    try {
        if (!repoUrl || !repoUrl.includes('github.com')) {
            throw new Error('Invalid GitHub repository URL');
        }

        const urlParts = repoUrl.split('github.com/')[1].split('/');
        if (urlParts.length < 2) {
            throw new Error('Invalid GitHub repository URL format');
        }

        const owner = urlParts[0];
        const repo = urlParts[1];

        // Headers for GitHub API requests
        const headers = {
            'Accept': 'application/vnd.github.v3+json'
        };

        // Add token if available
        if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
            headers['Authorization'] = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
        }

        // Fetch all necessary data
        const [repoData, contributorsData, prsData, commitsResponse] = await Promise.all([
            fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers }).then(r => r.json()),
            fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`, { headers }).then(r => r.json()),
            fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all`, { headers }).then(r => r.json()),
            fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`, { headers })
        ]);

        // Check for API errors
        if (repoData.message) {
            throw new Error(`GitHub API Error: ${repoData.message}`);
        }

        // Get total commit count from header
        const linkHeader = commitsResponse.headers.get('link');
        const totalCommits = linkHeader ? 
            parseInt(linkHeader.match(/page=(\d+)>; rel="last"/)?.[1] || '1') : 
            1;

        // Determine repository category
        const repoCategory = categorizeRepository({
            stars: repoData.stargazers_count || 0,
            forks: repoData.forks_count || 0,
            size: repoData.size || 0,
            commits: totalCommits || 0,
            contributors: Array.isArray(contributorsData) ? contributorsData.length : 0
        });

        // Calculate scores based on category
        const scores = {
            stars: calculateStarsScore(repoData.stargazers_count || 0, repoCategory),
            forks: calculateForksScore(repoData.forks_count || 0, repoCategory),
            contributors: calculateContributorsScore(Array.isArray(contributorsData) ? contributorsData.length : 0, repoCategory),
            activity: calculateActivityScore(repoData.updated_at, repoData.created_at),
            prs: calculatePRsScore(Array.isArray(prsData) ? prsData.length : 0, repoCategory),
            issues: calculateIssuesScore(repoData.open_issues_count || 0, repoCategory, totalCommits)
        };

        const finalScore = calculateFinalScore(scores);

        return {
            repoName: repoData.full_name,
            category: repoCategory,
            scores,
            finalScore,
            details: {
                totalStars: repoData.stargazers_count || 0,
                totalForks: repoData.forks_count || 0,
                totalContributors: Array.isArray(contributorsData) ? contributorsData.length : 0,
                totalPRs: Array.isArray(prsData) ? prsData.length : 0,
                openIssues: repoData.open_issues_count || 0,
                totalCommits,
                sizeKB: repoData.size || 0,
                created: repoData.created_at,
                lastUpdated: repoData.updated_at
            }
        };
    } catch (error) {
        console.error('Repository evaluation error:', error);
        throw new Error(`Failed to evaluate repository: ${error.message}`);
    }
}

function categorizeRepository({ stars, forks, size, commits, contributors }) {
    // Calculate a composite size score
    const sizeScore = 
        (Math.log10(stars + 1) * 2) +
        (Math.log10(forks + 1) * 1.5) +
        (Math.log10(size + 1) * 1) +
        (Math.log10(commits + 1) * 2) +
        (Math.log10(contributors + 1) * 1.5);

    // Categorize based on the composite score
    if (sizeScore >= 20) return REPO_CATEGORIES.EXTRA_LARGE;
    if (sizeScore >= 15) return REPO_CATEGORIES.LARGE;
    if (sizeScore >= 10) return REPO_CATEGORIES.MEDIUM;
    if (sizeScore >= 5) return REPO_CATEGORIES.SMALL;
    return REPO_CATEGORIES.TINY;
}

// Updated scoring functions that consider repository category
function calculateStarsScore(stars, category) {
    const categoryThresholds = {
        [REPO_CATEGORIES.TINY]: [1, 3, 5, 10, 20, 35, 50, 75, 100],
        [REPO_CATEGORIES.SMALL]: [3, 10, 20, 35, 50, 75, 100, 150, 200],
        [REPO_CATEGORIES.MEDIUM]: [10, 25, 50, 100, 200, 350, 500, 750, 1000],
        [REPO_CATEGORIES.LARGE]: [25, 50, 100, 200, 350, 500, 750, 1000, 2000],
        [REPO_CATEGORIES.EXTRA_LARGE]: [50, 100, 200, 350, 500, 1000, 2000, 3500, 5000]
    };

    const thresholds = categoryThresholds[category];
    for (let i = 0; i < thresholds.length; i++) {
        if (stars < thresholds[i]) return i + 1;
    }
    return 10;
}

function calculateIssuesScore(openIssues, category, totalCommits) {
    // Calculate issues-to-commits ratio
    const issueRatio = openIssues / (totalCommits || 1);

    // More lenient ratio thresholds based on category
    const categoryRatioThresholds = {
        [REPO_CATEGORIES.TINY]: 0.2,
        [REPO_CATEGORIES.SMALL]: 0.1,
        [REPO_CATEGORIES.MEDIUM]: 0.05,
        [REPO_CATEGORIES.LARGE]: 0.02,
        [REPO_CATEGORIES.EXTRA_LARGE]: 0.01
    };

    const expectedRatio = categoryRatioThresholds[category];
    
    // More lenient scoring based on ratio
    if (issueRatio <= expectedRatio) return 10;
    if (issueRatio <= expectedRatio * 2) return 9;
    if (issueRatio <= expectedRatio * 3) return 8;
    if (issueRatio <= expectedRatio * 4) return 7;
    if (issueRatio <= expectedRatio * 5) return 6;
    if (issueRatio <= expectedRatio * 7) return 5;
    if (issueRatio <= expectedRatio * 10) return 4;
    if (issueRatio <= expectedRatio * 15) return 3;
    if (issueRatio <= expectedRatio * 20) return 2;
    return 1;
}

function calculatePRsScore(prs, category) {
    const categoryThresholds = {
        [REPO_CATEGORIES.TINY]: [1, 2, 3, 5, 7, 10, 15, 20, 30],
        [REPO_CATEGORIES.SMALL]: [2, 5, 10, 15, 20, 30, 40, 50, 75],
        [REPO_CATEGORIES.MEDIUM]: [5, 10, 20, 30, 50, 75, 100, 150, 200],
        [REPO_CATEGORIES.LARGE]: [10, 25, 50, 75, 100, 150, 200, 300, 500],
        [REPO_CATEGORIES.EXTRA_LARGE]: [25, 50, 100, 200, 300, 500, 750, 1000, 1500]
    };

    const thresholds = categoryThresholds[category];
    for (let i = 0; i < thresholds.length; i++) {
        if (prs < thresholds[i]) return i + 1;
    }
    return 10;
}

function calculateActivityScore(lastUpdated, created) {
    const ageInDays = (new Date() - new Date(created)) / (1000 * 60 * 60 * 24);
    const daysSinceUpdate = (new Date() - new Date(lastUpdated)) / (1000 * 60 * 60 * 24);
    
    // More lenient activity ratio
    const activityRatio = daysSinceUpdate / ageInDays;

    if (activityRatio <= 0.05) return 10;  // Updated within 5% of its lifetime
    if (activityRatio <= 0.1) return 9;
    if (activityRatio <= 0.15) return 8;
    if (activityRatio <= 0.2) return 7;
    if (activityRatio <= 0.3) return 6;
    if (activityRatio <= 0.4) return 5;
    if (activityRatio <= 0.5) return 4;
    if (activityRatio <= 0.6) return 3;
    if (activityRatio <= 0.8) return 2;
    return 1;
}

function calculateForksScore(forks, category) {
    const thresholds = {
        [REPO_CATEGORIES.TINY]: [1, 2, 3, 5, 7, 10, 15, 20, 30],
        [REPO_CATEGORIES.SMALL]: [2, 5, 10, 15, 20, 30, 40, 50, 75],
        [REPO_CATEGORIES.MEDIUM]: [5, 10, 20, 30, 50, 75, 100, 150, 200],
        [REPO_CATEGORIES.LARGE]: [10, 25, 50, 75, 100, 150, 200, 300, 500],
        [REPO_CATEGORIES.EXTRA_LARGE]: [25, 50, 100, 200, 300, 500, 750, 1000, 1500]
    };

    const categoryThresholds = thresholds[category];
    for (let i = 0; i < categoryThresholds.length; i++) {
        if (forks < categoryThresholds[i]) return i + 1;
    }
    return 10;
}

function calculateContributorsScore(contributors, category) {
    const categoryThresholds = {
        [REPO_CATEGORIES.TINY]: [1, 2, 3, 4, 5, 7, 10, 15, 20],
        [REPO_CATEGORIES.SMALL]: [2, 3, 5, 7, 10, 15, 20, 30, 40],
        [REPO_CATEGORIES.MEDIUM]: [3, 5, 10, 15, 20, 30, 40, 60, 80],
        [REPO_CATEGORIES.LARGE]: [5, 10, 20, 30, 40, 60, 80, 120, 160],
        [REPO_CATEGORIES.EXTRA_LARGE]: [10, 20, 30, 50, 75, 100, 150, 200, 300]
    };

    const thresholds = categoryThresholds[category];
    for (let i = 0; i < thresholds.length; i++) {
        if (contributors < thresholds[i]) return i + 1;
    }
    return 10;
}

function calculateFinalScore(scores) {
    const weights = {
        stars: 0.20,
        forks: 0.15,
        contributors: 0.15,
        activity: 0.20,
        prs: 0.15,
        issues: 0.15
    };

    const weightedScore = Object.entries(scores).reduce((total, [key, score]) => {
        return total + (score * weights[key]);
    }, 0);

    return Math.round(weightedScore * 10) / 10;
}