'use client';


import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function OrganisationMembers() {
  const { projectid } = useParams();
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data fetch - replace with actual API call
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockProjects = [
          {
            id: 1,
            name: "Web3 Wallet",
            description: "Secure wallet for DAO members",
            category: "Infrastructure",
            votes: 45,
            threshold: 50,
            isFunded: false,
            requestedAmount: "25 ETH"
          },
          {
            id: 2,
            name: "Governance Portal",
            description: "Voting and proposal system",
            category: "Governance",
            votes: 78,
            threshold: 50,
            isFunded: true,
            fundedAmount: "120 ETH"
          },
          {
            id: 3,
            name: "DAO Analytics",
            description: "Dashboard for DAO metrics",
            category: "Analytics",
            votes: 32,
            threshold: 50,
            isFunded: false,
            requestedAmount: "40 ETH"
          }
        ];
        
        setProjects(mockProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [id]);

  const handleVote = async (projectId) => {
    try {
      // Simulate voting API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setProjects(prevProjects => 
        prevProjects.map(project => 
          project.id === projectId 
            ? { ...project, votes: project.votes + 1 } 
            : project
        )
      );
      
      alert(`Voted for project successfully!`);
    } catch (error) {
      console.error("Voting failed:", error);
      alert("Voting failed. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 mt-15 select-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 cursor-text">DAO Projects</h1>
        
        {/* Funded Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-400 cursor-text">Funded Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.isFunded).map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isFunded={true} 
                onVote={handleVote}
                id={id}
              />
            ))}
            
            {projects.filter(p => p.isFunded).length === 0 && (
              <p className="text-gray-400">No funded projects yet</p>
            )}
          </div>
        </section>

        {/* Non-Funded Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400 cursor-text">Projects Needing Votes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.isFunded).map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isFunded={false} 
                onVote={handleVote}
                id={id}
              />
            ))}
            
            {projects.filter(p => !p.isFunded).length === 0 && (
              <p className="text-gray-400">All projects are funded!</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectCard({ project, isFunded, onVote, id }) {
  const progress = Math.min((project.votes / project.threshold) * 100, 100);

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all relative">
      {/* Remove cursor-text and select-text from these elements */}
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>

      {/* View Details Link - simplified */}
      <Link
        href={`/organisations/${id}/members/${project.id}`}
        className="inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors mb-4"
      >
        View Details →
      </Link>

      <div className="mb-4">
        {isFunded ? (
          <div>
            <p className="text-green-400 font-medium">Funded: {project.fundedAmount}</p>
            <p className="text-sm text-gray-400">Approved by {project.votes} members</p>
          </div>
        ) : (
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Votes: {project.votes}/{project.threshold}</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div 
                className="bg-purple-500 h-2 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">Requesting: {project.requestedAmount}</p>
          </div>
        )}
      </div>
      
      {!isFunded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onVote(project.id);
          }}
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Vote for Project
        </button>
      )}
    </div>
  );
} 