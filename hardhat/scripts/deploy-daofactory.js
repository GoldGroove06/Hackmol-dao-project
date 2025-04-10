const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Provide your USDC token address here (real or mock)
  const usdcAddress = "0xYourUSDCAddressHere"; // <-- 🔁 Replace this

  console.log("Deploying DAOFactory with USDC:", usdcAddress);

  const DAOFactory = await hre.ethers.getContractFactory("DAOFactory");
  const daoFactory = await DAOFactory.deploy(usdcAddress);
  await daoFactory.waitForDeployment();

  const daoAddress = await daoFactory.getAddress();
  console.log("DAOFactory deployed to:", daoAddress);

  // (Optional) Save address for frontend
  const frontendPath = path.resolve(__dirname, "../frontend/src/abi/DAOFactory-address.json");
  fs.writeFileSync(frontendPath, JSON.stringify({ daoFactory: daoAddress }, null, 2));
  console.log("DAOFactory address exported.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
