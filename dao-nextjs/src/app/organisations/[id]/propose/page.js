// src/app/organisations/[id]/propose/page.js
'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ProposeProject() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    fundingAmount: '',
    votingPeriod: '',
    githubLink: ''
  });

  const [wallet, setWallet] = useState({
    address: '',
    signer: null,
    connected: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        throw new Error('Please install MetaMask to use this application');
      }

      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      // Get provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      setWallet({
        address: accounts[0],
        signer: signer,
        connected: true
      });
      
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!wallet.connected) {
      setError('Please connect your wallet first');
      return;
    }

    try {
      // Create a message to sign
      const message = JSON.stringify({
        ...formData,
        organisationId: id,
        timestamp: Date.now()
      });

      // Sign the message
      const signature = await wallet.signer.signMessage(message);

      const response = await fetch('/api/proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          organisationId: id,
          signerAddress: wallet.address,
          signature: signature,
          message: message
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit proposal');
      }

      alert('Project proposal submitted successfully!');
    } catch (error) {
      console.error('Error submitting proposal:', error);
      alert(error.message || 'Failed to submit proposal. Please try again.');
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg mt-25 mb-10">
      <h1 className="text-2xl font-bold text-white mb-6">Propose New Project</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
      {!wallet.connected ? (
          <button
            onClick={connectWallet}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-green-600">
            Connected: {wallet.address}
          </div>
        )}
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-300 mb-2">
            Requested Funding (USDC)
          </label>
          <input
            type="number"
            id="fundingAmount"
            name="fundingAmount"
            value={formData.fundingAmount}
            onChange={handleChange}
            step="0.01"
            min="0"
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="votingPeriod" className="block text-sm font-medium text-gray-300 mb-2">
            Voting Period (secs)
          </label>
          <input
            type="number"
            id="votingPeriod"
            name="votingPeriod"
            value={formData.votingPeriod}
            onChange={handleChange}
            min="1"
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="githubLink" className="block text-sm font-medium text-gray-300 mb-2">
            Github Repository Link
          </label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
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