// governance.js
import { ethers } from "ethers";
import GovernanceJson from "@/abis/Governance.json"; // Make sure to have your Governance ABI here

// Replace with your deployed Governance contract address
const GOVERNANCE_ADDRESS = "0xf5059a5D33d5853360D16C683c16e67980206f36";

export function getGovernanceContract(signerOrProvider) {
    return new ethers.Contract(GOVERNANCE_ADDRESS, GovernanceJson.abi, signerOrProvider);
}

// Create a new proposal
export async function createProposal(signer, title, description, amount, recipient, votingPeriod) {
    try {
        const contract = getGovernanceContract(signer);
        const tx = await contract.createProposal(
            title,
            description,
            amount,
            recipient,
            votingPeriod
        );
        await tx.wait();
        return tx.hash;
    } catch (error) {
        console.error("Error creating proposal:", error);
        throw error;
    }
}

// Vote on a proposal
export async function voteOnProposal(signer, proposalId, support) {
    try {
        const contract = getGovernanceContract(signer);
        const tx = await contract.vote(proposalId, support);
        await tx.wait();
        return tx.hash;
    } catch (error) {
        console.error("Error voting on proposal:", error);
        throw error;
    }
}

// Get proposal details
export async function getProposal(provider, proposalId) {
    try {
        const contract = getGovernanceContract(provider);
        const proposal = await contract.getProposal(proposalId);
        return {
            id: proposal.id.toString(),
            proposer: proposal.proposer,
            title: proposal.title,
            description: proposal.description,
            amount: proposal.amount.toString(),
            recipient: proposal.recipient,
            yesVotes: proposal.yesVotes.toString(),
            noVotes: proposal.noVotes.toString(),
            status: getProposalStatus(proposal.status),
            startTime: new Date(proposal.startTime * 1000),
            endTime: new Date(proposal.endTime * 1000)
        };
    } catch (error) {
        console.error("Error getting proposal:", error);
        throw error;
    }
}

// Helper function to convert proposal status to string
function getProposalStatus(statusCode) {
    const statuses = ['Active', 'Approved', 'Rejected', 'Executed'];
    return statuses[statusCode] || 'Unknown';
}

// Get total number of proposals
export async function getProposalCount(provider) {
    try {
        const contract = getGovernanceContract(provider);
        const count = await contract.getProposalCount();
        return count.toString();
    } catch (error) {
        console.error("Error getting proposal count:", error);
        throw error;
    }
}

// Check if an address has voted on a proposal
export async function hasVoted(provider, proposalId, voterAddress) {
    try {
        const contract = getGovernanceContract(provider);
        return await contract.hasVoted(proposalId, voterAddress);
    } catch (error) {
        console.error("Error checking vote status:", error);
        throw error;
    }
}

// Finalize a proposal
export async function finalizeProposal(signer, proposalId) {
    try {
        const contract = getGovernanceContract(signer);
        const tx = await contract.finalizeProposal(proposalId);
        await tx.wait();
        return tx.hash;
    } catch (error) {
        console.error("Error finalizing proposal:", error);
        throw error;
    }
}

// Update proposal threshold (only owner)
export async function updateProposalThreshold(signer, newThreshold) {
    try {
        const contract = getGovernanceContract(signer);
        const tx = await contract.updateProposalThreshold(newThreshold);
        await tx.wait();
        return tx.hash;
    } catch (error) {
        console.error("Error updating proposal threshold:", error);
        throw error;
    }
}

// Toggle testing mode (only owner)
export async function setTestingMode(signer, enabled) {
    try {
        const contract = getGovernanceContract(signer);
        const tx = await contract.setTestingMode(enabled);
        await tx.wait();
        return tx.hash;
    } catch (error) {
        console.error("Error setting testing mode:", error);
        throw error;
    }
}

// Get contract state information
export async function getContractState(provider) {
    try {
        const contract = getGovernanceContract(provider);
        const [
            usdcToken,
            membershipContract,
            treasuryContract,
            proposalThreshold,
            testingMode
        ] = await Promise.all([
            contract.usdcToken(),
            contract.membershipContract(),
            contract.treasuryContract(),
            contract.proposalThreshold(),
            contract.testingMode()
        ]);

        return {
            usdcToken,
            membershipContract,
            treasuryContract,
            proposalThreshold: proposalThreshold.toString(),
            testingMode
        };
    } catch (error) {
        console.error("Error getting contract state:", error);
        throw error;
    }
}

// Get all proposals (helper function)
export async function getAllProposals(provider) {
    try {
        const count = await getProposalCount(provider);
        const proposals = [];
        
        for (let i = 1; i <= count; i++) {
            const proposal = await getProposal(provider, i);
            proposals.push(proposal);
        }
        
        return proposals;
    } catch (error) {
        console.error("Error getting all proposals:", error);
        throw error;
    }
}