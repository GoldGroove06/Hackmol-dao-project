// src/app/organisations/[id]/projects/page.js
'use client'; // Add this directive at the top
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function DAOProjects() {
  const { id } = useParams();
  
  // Mock projects data - replace with real data from your backend
  const projects = [
    {
      id: 1,
      name: "Web3 Wallet",
      description: "A secure wallet solution for DAO members",
      funding: "50 ETH",
      status: "Active",
      proposer: "0x1a2...b3c"
    },
    {
      id: 2,
      name: "Governance Portal",
      description: "Voting and proposal management system",
      funding: "120 ETH",
      status: "Approved",
      proposer: "0x4d5...e6f"
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">DAO Projects</h1>
        <Link 
          href={`/organisations/${id}/propose`}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          Propose New Project
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all">
            <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-purple-300">Funding: {project.funding}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                project.status === 'Approved' ? 'bg-blue-500/20 text-blue-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-400 text-xs">Proposed by: {project.proposer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}