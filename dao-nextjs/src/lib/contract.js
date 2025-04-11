import { ethers } from "ethers";
import ContractJson from "@/abis/DAOFactory.json"; // path to ABI

const CONTRACT_ADDRESS = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";

export function getContract(signerOrProvider) {
  return new ethers.Contract(CONTRACT_ADDRESS, ContractJson.abi, signerOrProvider);
}

// export async function createDAO(signer, name, membershipFee, proposalThreshold) {
//   const contract = getContract(signer);
//   const tx = await contract.createDAO(name, membershipFee, proposalThreshold); // Replace with your actual function
//   await tx.wait(); // Wait for transaction to be mined
//     return tx.hash;
//   }

  
// Function to get DAO IDs for an organization
export async function getOrganizationDAOs(provider, organizationAddress) {
  try {
    const contract = getContract(provider);
    const daoIds = await contract.getOrganizationDAOs(organizationAddress);
    return daoIds.map(id => id.toString());
  } catch (error) {
    console.error("Error getting organization DAOs:", error);
    throw error;
  }
}

// Function to get single DAO details
export async function getDAO(provider, daoId) {
  try {
    const contract = getContract(provider);
    const dao = await contract.getDAO(daoId);
    
    return {
      id: dao.id.toString(),
      name: dao.name,
      owner: dao.owner,
      membershipContract: dao.membershipContract,
      treasuryContract: dao.treasuryContract,
      governanceContract: dao.governanceContract,
      active: dao.active
    };
  } catch (error) {
    console.error("Error getting DAO details:", error);
    throw error;
  }
}

// Helper function to get all DAOs with details for an organization
export async function getOrganizationDAOsWithDetails(provider, organizationAddress) {
  try {
    // First get all DAO IDs
    const daoIds = await getOrganizationDAOs(provider, organizationAddress);
    
    if (daoIds.length === 0) {
      return [];
    }

    // Get details for each DAO
    const daosPromises = daoIds.map(id => getDAO(provider, id));
    return await Promise.all(daosPromises);
  } catch (error) {
    console.error("Error getting organization DAOs with details:", error);
    throw error;
  }
}

// Function to create a new DAO
export async function createDAO(signer, name, membershipFee, proposalThreshold) {
  try {
    const contract = getContract(signer);
    const tx = await contract.createDAO(name, membershipFee, proposalThreshold);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error creating DAO:", error);
    throw error;
  }
}

