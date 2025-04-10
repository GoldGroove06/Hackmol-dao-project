// src/app/organisations/[id]/propose/page.js
'use client';
import { useParams } from 'next/navigation';

export default function ProposeProject() {
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Project proposal submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto  p-6 bg-gray-800 rounded-lg mt-25 mb-10">
      <h1 className="text-2xl font-bold text-white mb-6">Propose New Project</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-300 mb-2">
            Requested Funding (ETH)
          </label>
          <input
            type="number"
            id="fundingAmount"
            step="0.01"
            min="0"
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-2">
            Project Duration (weeks)
          </label>
          <input
            type="number"
            id="duration"
            min="1"
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all"
          >
            Submit Proposal
          </button>
        </div>
      </form>
    </div>
  );
}