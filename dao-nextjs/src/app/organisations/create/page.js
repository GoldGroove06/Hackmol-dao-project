'use client'; // Required for form state

import { useState } from 'react';
import Link from 'next/link';
import { getOrganizationDAOs, getDAO } from '@/lib/contract';
import { ethers } from 'ethers';
import { getContract, createDAO } from '@/lib/contract';

export default function CreateDAOPage() {


  const [wallet, setWallet] = useState({
    address: '',
    signer: null,
    connected: false
  });
  const [formData, setFormData] = useState({
    name: '',
    membershipFee: '',
    proposalThreshold: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
//   get dao part
  const [daos, setDaos] = useState([]);
  const [daosId, setDaosId] = useState([]);

  const [isCreating, setIsCreating] = useState(false);
  const handleCreateDao = (e) => {
    e.preventDefault();
    setIsCreating(true);
    // Here you would typically call an API to join the DAO
    // For now, we'll just simulate the join process
    setTimeout(() => {
      alert(`Successfully Created !`);
      setIsCreating(false);
    }, 1500);
  };

  

  const handleTagAdd = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, e.target.value]
      }));
      e.target.value = '';
    }
  };

  const removeTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  
  
  // Connect wallet function
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (!wallet.connected) {
        throw new Error('Please connect your wallet first');
      }

      // Convert values to proper format
      const membershipFeeWei = ethers.parseEther(formData.membershipFee);
      const proposalThreshold = ethers.parseUnits(formData.proposalThreshold, 0); // Assuming it's a whole number

      // Create DAO
      const txHash = await createDAO(
        wallet.signer,
        formData.name,
        membershipFeeWei,
        proposalThreshold
      );
      
      setSuccess(`DAO created successfully! Transaction hash: ${txHash}`);
      
      // Reset form
      setFormData({
        name: '',
        membershipFee: '',
        proposalThreshold: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

// start of get doas and extra and up is the createdao part
  // Connect wallet and fetch DAOs
  const connectAndFetchDAOs = async () => {
    if (typeof window.ethereum === 'undefined') {
      setError('Please install MetaMask to use this application');
      return;
    }
    await fetchOrganizationDAOs();
  };

  // Function to fetch all DAOs for an organization
  const fetchOrganizationDAOs = async () => {
    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      
      // Get the connected wallet address
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
    //   const organizationAddress = wallet.address;
      console.log(wallet.address) 
      // Get all DAOs with full details
      const daosIDsOfUser = await getOrganizationDAOs(
        provider,
        wallet.address
      );
      
      setDaosId(daosIDsOfUser);
      console.log('DAO IDs:', daosIDsOfUser);
      for (let i = 0; i < daosIDsOfUser.length; i++) {
        const daoDetails = await getDAO(provider, daosIDsOfUser[i]);
        setDaos((prevDaos) => [...prevDaos, daoDetails]);
      }
      setError('');
    } catch (err) {
      console.error('Error fetching DAOs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mt-10">
       
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
      <div className="mb-8">
        {!wallet.connected ? (
          <button
            onClick={connectWallet}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-green-600">
            Connected: {wallet.address}
          </div>
        )}
      </div>
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to DAOs
          </Link>
          <h1 className="text-3xl font-bold text-white">Create New DAO</h1>
          <p className="text-gray-400 mt-2">Configure your decentralized autonomous organization</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Basic Information</h2>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">DAO Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="membershipfee" className="block text-sm font-medium text-gray-300 mb-1">Membership fee *</label>
              <input 
                type="number"
                id="membershipFee"
                name="membershipFee"
                value={formData.membershipFee}
                onChange={handleChange}
                rows={3}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>

              <label htmlFor="ProposalThreshold" className="block text-sm font-medium text-gray-300 mb-1">Propsal Threshold</label>
              <input
                type="number"
                id="proposalThreshold"
                name="proposalThreshold"
                value={formData.proposalThreshold}

                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="$"
              />
            </div>

            {/* <div>
              <label htmlFor="logo" className="block text-sm font-medium text-gray-300 mb-1">Threshold</label>

            <div>
              <label htmlFor="Threshold" className="block text-sm font-medium text-gray-300 mb-1">Threshold</label>

              <input
                type="number"
                id="threshold"
                name="threshold"
                
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="$"
              />
            </div> */}

            {/* <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-1">Tags</label>
              <input
                type="text"
                id="tags"
                name="tags"
                onKeyDown={handleTagAdd}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Press Enter to add tags"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs flex items-center">
                    {tag}
                    <button 
                      type="button"
                      onClick={() => removeTag(index)}
                      className="ml-2 text-gray-400 hover:text-white"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div> */}
          </div>

          {/* Governance */}
          {/* <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Governance Settings</h2>
            
            <div>
              <label htmlFor="governanceToken" className="block text-sm font-medium text-gray-300 mb-1">Governance Token Address *</label>
              <input
                type="text"
                id="governanceToken"
                name="governanceToken"
                value={formData.governanceToken}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="0x..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="votingPeriod" className="block text-sm font-medium text-gray-300 mb-1">Voting Period (days) *</label>
                <select
                  id="votingPeriod"
                  name="votingPeriod"
                  value={formData.votingPeriod}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="1">1 day</option>
                  <option value="3">3 days</option>
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                </select>
              </div>

              <div>
                <label htmlFor="quorum" className="block text-sm font-medium text-gray-300 mb-1">Quorum (%) *</label>
                <input
                  type="number"
                  id="quorum"
                  name="quorum"
                  min="1"
                  max="100"
                  value={formData.quorum}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div> */}

          {/* Treasury */}
          {/* <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Treasury</h2>
            
            <div>
              <label htmlFor="treasuryAddress" className="block text-sm font-medium text-gray-300 mb-1">Treasury Wallet Address</label>
              <input
                type="text"
                id="treasuryAddress"
                name="treasuryAddress"
                value={formData.treasuryAddress}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="0x..."
              />
            </div>
          </div> */}

          <div className="pt-4">
            
            {/* Create DAO Button - Bottom Row */}
        <div className="mt-3">
        <button
          type="submit"
          disabled={loading || !wallet.connected}
          className={`bg-blue-500 text-white px-4 py-2 rounded w-full
            ${(loading || !wallet.connected) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Creating DAO...' : 'Create DAO'}
        </button>
          {/* <button
            onClick={handleCreateDao}
            disabled={isCreating}
            type="submit"
            className={`w-full ${
              isCreating 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'
            } text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}
          >
            {isCreating ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </>
            ) : (
              <>
                
                Create DAO
              </>
            )}
          </button> */}
        </div>
          </div>
        </form>
         {/* Error and Success Messages */}
      {error && (
        <div className="mt-4 text-red-600">
          Error: {error}
        </div>
      )}
      {success && (
        <div className="mt-4 text-green-600">
          {success}
        </div>
      )}
      </div>
    </div>
  );
}