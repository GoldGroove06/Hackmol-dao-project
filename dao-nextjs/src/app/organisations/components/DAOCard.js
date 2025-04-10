// src/app/organisations/components/DAOCard.js
'use client';
import Link from 'next/link';

export default function DAOCard({ dao }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            {dao.logo && (
              <img src={dao.logo} alt={`${dao.name} logo`} className="w-10 h-10 rounded-full object-cover" />
            )}
            <h2 className="text-2xl font-bold text-white">{dao.name}</h2>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-2">{dao.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {dao.tags.map((tag, i) => (
            <span key={i} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between text-sm text-gray-400 mb-6">
          <div>
            <span className="block font-medium">Members</span>
            <span className="text-white">{dao.members}</span>
          </div>
          <div>
            <span className="block font-medium">Treasury</span>
            <span className="text-white">{dao.treasury}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Link 
            href={`/organisations/${dao.id}/projects`}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center"
          >
            View Projects
          </Link>
          <Link
            href={`/organisations/${dao.id}/propose`}
            className="w-full bg-gradient-to-r from-purple-600/80 to-blue-500/80 hover:from-purple-600 hover:to-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center"
          >
            Propose Project
          </Link>
        </div>
      </div>
    </div>
  );
}