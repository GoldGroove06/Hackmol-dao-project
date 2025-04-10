"use client"

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getContract } from "@/lib/contract"; // Adjust the import path as necessary

export default function Ctest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function load() {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = getContract(signer);
        const msg = await contract.getMessage();
        setMessage(msg);
      }
    }

    load();
  }, []);

  return <div>Message from contract: {message}</div>;
}
