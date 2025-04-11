// src/app/organisations/[id]/projects/page.js
'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function DAOProjects() {
  const { id } = useParams();
  const router = useRouter();
  const [isJoining, setIsJoining] = useState(false);

  // Mock projects data - replace with real data from your backend
  const projects = [
    {
      id: 1,
      name: "Web3 Wallet",
      description: "A secure wallet solution for DAO members",
      funding: "50 ETH",
      status: "Active",
      proposer: "0x1a2...b3c",
      members: 128,
      treasury: "450 ETH"
    },
    {
      id: 2,
      name: "Governance Portal",
      description: "Voting and proposal management system",
      funding: "120 ETH",
      status: "Approved",
      proposer: "0x4d5...e6f",
      members: 342,
      treasury: "1200 ETH"
    },
  ];

  const handleJoinDAO = async () => {
    setIsJoining(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Redirect to success page or refresh data
      alert('Successfully joined the DAO!');
      // router.push(`/organisations/${id}/join/success`);
    } catch (error) {
      console.error('Error joining DAO:', error);
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">DAO Projects</h1>
          <p className="text-gray-400 mt-1">Explore and contribute to projects</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={handleJoinDAO}
            disabled={isJoining}
            className={`flex-1 md:flex-none ${
              isJoining 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'
            } text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}
          >
            {isJoining ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Join DAO
              </>
            )}
          </button>
          <Link
            href={`/organisations/${id}/propose`}
            className="flex-1 md:flex-none bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Propose
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Total Projects</p>
          <p className="text-2xl font-bold text-white">{projects.length}</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">DAO Members</p>
          <p className="text-2xl font-bold text-white">{projects[0]?.members.toLocaleString()}</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Treasury</p>
          <p className="text-2xl font-bold text-white">{projects[0]?.treasury}</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all group">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.name}</h2>
              <span className={`px-2 py-1 rounded-full text-xs ${
                project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                project.status === 'Approved' ? 'bg-blue-500/20 text-blue-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-purple-300 font-medium">Funded: {project.funding}</span>
              <span className="text-gray-400 text-xs">Proposed by: {project.proposer}</span>
            </div>
            
            {/* <Link 
              href={`/organisations/${id}/projects/${project.id}`}
              className="mt-4 inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors items-center gap-1"
            >
              View details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}