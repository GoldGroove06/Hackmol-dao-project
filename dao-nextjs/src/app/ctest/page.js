'use client';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { getContract, createDAO } from '@/lib/contract';

export default function Home() {
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
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

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
      const organizationAddress = accounts[0];

      // Get all DAOs with full details
      const daosWithDetails = await getOrganizationDAOsWithDetails(
        provider,
        organizationAddress
      );
      
      setDaos(daosWithDetails);
      setError('');
    } catch (err) {
      console.error('Error fetching DAOs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch a single DAO
  const fetchDAO = async (daoId) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const daoDetails = await getDAO(provider, daoId);
      console.log('DAO Details:', daoDetails);
      return daoDetails;
    } catch (err) {
      console.error('Error fetching DAO:', err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Create a DAO</h1>

      {/* Wallet Connection */}
      <div className="mb-8">
        {!wallet.connected ? (
          <button
            onClick={connectWallet}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-green-600">
            Connected: {wallet.address}
          </div>
        )}
      </div>

      {/* Create DAO Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-2">DAO Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Membership Fee (ETH):</label>
          <input
            type="number"
            name="membershipFee"
            value={formData.membershipFee}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            step="0.001"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Proposal Threshold:</label>
          <input
            type="number"
            name="proposalThreshold"
            value={formData.proposalThreshold}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !wallet.connected}
          className={`bg-blue-500 text-white px-4 py-2 rounded w-full
            ${(loading || !wallet.connected) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Creating DAO...' : 'Create DAO'}
        </button>
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
{/* start of the getdao part */}
<div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your DAOs</h1>
      
      <button
        onClick={connectAndFetchDAOs}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {loading ? 'Loading...' : 'Load Your DAOs'}
      </button>

      {error && (
        <div className="text-red-600 mb-4">
          Error: {error}
        </div>
      )}

      <div className="space-y-4">
        {daos.map((dao) => (
          <div 
            key={dao.id}
            className="border p-4 rounded shadow"
          >
            <h2 className="text-xl font-bold">{dao.name}</h2>
            <p>ID: {dao.id}</p>
            <p>Status: {dao.active ? 'Active' : 'Inactive'}</p>
            <p className="text-sm truncate">Owner: {dao.owner}</p>
            <p className="text-sm truncate">Membership Contract: {dao.membershipContract}</p>
            <p className="text-sm truncate">Treasury Contract: {dao.treasuryContract}</p>
            <p className="text-sm truncate">Governance Contract: {dao.governanceContract}</p>
          </div>
          ))}
          </div>
        </div>
    </div>
  );
}