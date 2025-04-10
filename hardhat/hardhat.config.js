require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20", // Adjust according to your contract
  networks: {
    hardhat: {
      chainId: 31337, // Default Hardhat Network ID
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
