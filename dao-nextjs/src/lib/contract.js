import { ethers } from "ethers";
import ContractJson from "@/abis/DAOFactory.json"; // path to ABI

const CONTRACT_ADDRESS = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";

export function getContract(signerOrProvider) {
  return new ethers.Contract(CONTRACT_ADDRESS, ContractJson.abi, signerOrProvider);
}

export async function createDAO(signer, name, membershipFee, proposalThreshold) {
  const contract = getContract(signer);
  const tx = await contract.createDAO(name, membershipFee, proposalThreshold); // Replace with your actual function
  await tx.wait(); // Wait for transaction to be mined
  return tx.hash;
}

// New function to get a specific DAO's details
export async function getDAO(provider, daoId) {
  const contract = getContract(provider);
  const dao = await contract.getDAO(daoId);
  
  // Format the returned data into a more readable object
  return {
    id: dao.id.toString(),
    name: dao.name,
    owner: dao.owner,
    membershipContract: dao.membershipContract,
    treasuryContract: dao.treasuryContract,
    governanceContract: dao.governanceContract,
    active: dao.active
  };
}

// New function to get all DAOs created by an organization
export async function getOrganizationDAOs(provider, organizationAddress) {
  const contract = getContract(provider);
  const daoIds = await contract.getOrganizationDAOs(organizationAddress);
  
  // Convert BigNumber array to regular numbers
  return daoIds.map(id => id.toString());
}

// Optional: Helper function to get full details of all DAOs for an organization
export async function getOrganizationDAOsWithDetails(provider, organizationAddress) {
  const contract = getContract(provider);
  const daoIds = await contract.getOrganizationDAOs(organizationAddress);
  
  // Get details for each DAO
  const daosPromises = daoIds.map(id => contract.getDAO(id));
  const daos = await Promise.all(daosPromises);
  
  // Format the data
  return daos.map(dao => ({
    id: dao.id.toString(),
    name: dao.name,
    owner: dao.owner,
    membershipContract: dao.membershipContract,
    treasuryContract: dao.treasuryContract,
    governanceContract: dao.governanceContract,
    active: dao.active
  }));
}

