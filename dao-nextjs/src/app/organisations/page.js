// src/app/organisations/page.js
import Link from 'next/link';
import DAOCard from './components/DAOCard';

export default function Organizations() {
  const daos = [
    {
      id: 1,
      name: "Web3 Innovators",
      description: "A DAO focused on building the next generation of decentralized web applications.",
      members: 128,
      treasury: "450 ETH",
      proposals: 24,
      created: "Jan 2023",
      tags: ["Web3", "DApps", "Development"],
      aiScore: 87
    },
    // ... other DAO objects
    // ... your DAO data
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-15">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-white">DAO Organizations</h1>
        <Link 
          href="/organisations/create" 
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Create New DAO
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {daos.map((dao) => (
          <DAOCard key={dao.id} dao={dao} />
        ))}
      </div>
    </div>
  );
}