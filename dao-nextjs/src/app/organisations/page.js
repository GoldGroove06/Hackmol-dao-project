'use client';
// src/app/organisations/page.js
import Link from 'next/link';
import DAOCard from './components/DAOCard';
import { useState } from 'react';
import { getOrganizationDAOs, getDAO } from '@/lib/contract';
import { ethers } from 'ethers';

export default function Organizations() {
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
  // const daos = [
  //   {
  //     id: 1,
  //     name: "Web3 Innovators",
  //     description: "A DAO focused on building the next generation of decentralized web applications.",
  //     members: 128,
  //     treasury: "450 ETH",
  //     proposals: 24,
  //     created: "Jan 2023",
  //     tags: ["Web3", "DApps", "Development"],
  //     aiScore: 87
  //   },
  //   // ... other DAO objects
  //   // ... your DAO data
  // ];
  //   get dao part
    const [daos, setDaos] = useState([]);
    const [daosId, setDaosId] = useState([]);
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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-15">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-white">DAO Organizations</h1>
        <Link 
          href="/organisations/create" 
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Create New DAO
        </Link>
        <div className="mb-8">
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
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <button
        onClick={connectAndFetchDAOs}
        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        {loading ? 'Loading...' : 'Load DAOs'}
      </button>

      {error && (
        <div className="text-red-600 mb-4">
          Error: {error}
        </div>
      )}
        {daos.map((dao) => (
          <DAOCard key={dao.id} dao={dao} />
        ))}
      </div>
    </div>
  );
}