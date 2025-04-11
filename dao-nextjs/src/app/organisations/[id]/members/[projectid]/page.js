"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectDetails() {
  const { id, projectId } = useParams();
  const router = useRouter();

  // Mock data - replace with actual API call
  const project = {
    id: projectId,
    name: "Web3 Wallet",
    description:
      "Secure wallet solution for DAO members with multi-chain support and hardware wallet integration.",
    category: "Infrastructure",
    creator: "0x1a2...b3c",
    createdAt: "2023-10-15",
    votes: 45,
    threshold: 50,
    status: "Voting",
    requestedAmount: "25 ETH",
    milestones: [
      { name: "UI Prototype", completed: true },
      { name: "Smart Contracts", completed: true },
      { name: "Beta Testing", completed: false },
    ],
  };

  const handleVote = async (e) => {
    e.preventDefault();
    try {
      // Simulate voting API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Vote submitted successfully!");
      router.refresh();
    } catch (error) {
      console.error("Voting failed:", error);
      alert("Failed to submit vote. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href={`/organisations/${id}/members`}
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
            passHref
          >
            ← Back to Projects
          </Link>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <p className="text-purple-400 mt-1">{project.category}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                project.status === "Funded"
                  ? "bg-green-500/20 text-green-400"
                  : project.status === "Voting"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-gray-500/20 text-gray-400"
              }`}
            >
              {project.status}
            </span>
          </div>

          <p className="text-gray-300 mb-8">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Details</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Creator</p>
                  <p>{project.creator}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Created</p>
                  <p>{project.createdAt}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Requested Funding</p>
                  <p>{project.requestedAmount}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Vote Progress</h2>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>{project.votes} votes</span>
                  <span>{project.threshold} needed</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        (project.votes / project.threshold) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleVote();
                }}
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg 
             transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 
             active:bg-purple-800 relative z-10"
              >
                Vote for Project
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Milestones</h2>
            <div className="space-y-3">
              {project.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      milestone.completed
                        ? "bg-green-500"
                        : "bg-gray-700 border border-gray-600"
                    }`}
                  >
                    {milestone.completed && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={
                      milestone.completed ? "text-gray-300" : "text-gray-400"
                    }
                  >
                    {milestone.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
