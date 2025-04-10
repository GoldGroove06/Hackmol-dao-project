// src/app/organisations/components/DAOCard.js
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function DAOCard({ dao }) {
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinDAO = (e) => {
    e.preventDefault();
    setIsJoining(true);
    // Here you would typically call an API to join the DAO
    // For now, we'll just simulate the join process
    setTimeout(() => {
      alert(`Successfully joined ${dao.name}!`);
      setIsJoining(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="p-6">
        {/* Header with logo and name */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            {dao.logo ? (
              <img 
                src={dao.logo} 
                alt={`${dao.name} logo`} 
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  e.target.src = '/default-dao-logo.png'; // Fallback image
                }}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-purple-300">{dao.name.charAt(0)}</span>
              </div>
            )}
            <h2 className="text-2xl font-bold text-white">{dao.name}</h2>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 mb-4 line-clamp-2">{dao.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {dao.tags.map((tag, i) => (
            <span key={i} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
          <div className="bg-gray-700/30 p-3 rounded-lg">
            <span className="block font-medium">Members</span>
            <span className="text-white text-lg font-semibold">{dao.members.toLocaleString()}</span>
          </div>
          <div className="bg-gray-700/30 p-3 rounded-lg">
            <span className="block font-medium">Treasury</span>
            <span className="text-white text-lg font-semibold">{dao.treasury}</span>
          </div>
        </div>

        {/* Action Buttons - Top Row */}
        <div className="flex gap-3">
          <Link 
            href={`/organisations/${dao.id}/projects`}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            View Projects
          </Link>
          <Link
            href={`/organisations/${dao.id}/propose`}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Propose
          </Link>
        </div>

        {/* Join DAO Button - Bottom Row */}
        <div className="mt-3">
          <button
            onClick={handleJoinDAO}
            disabled={isJoining}
            className={`w-full ${
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
        </div>
      </div>
    </div>
  );
}