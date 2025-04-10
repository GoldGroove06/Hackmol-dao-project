const hre = require("hardhat");
const accountNumber = 0
async function main() {
    const accounts = await hre.ethers.getSigners();
    const deployer = accounts[accountNumber];

    console.log("Deploying MockUSDC with account:", deployer.address);

    const MockUSDC = await hre.ethers.getContractFactory("MockUSDC", deployer);
    const usdc = await MockUSDC.deploy();
    await usdc.waitForDeployment();

    const usdcAddress = await usdc.getAddress();
    console.log("Mock USDC deployed to:", usdcAddress);

    // Mint USDC tokens to your MetaMask wallet address
    const metaMaskAddress = accounts[accountNumber].address; // 👈 paste here
    
    const mintAmount = hre.ethers.parseUnits("1000", 6); // USDC typically uses 6 decimals
    const tx = await usdc.mint(metaMaskAddress, mintAmount);
    await tx.wait();

    console.log(`Minted 1000 USDC to ${metaMaskAddress}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
