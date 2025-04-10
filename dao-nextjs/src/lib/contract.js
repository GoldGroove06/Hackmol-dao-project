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