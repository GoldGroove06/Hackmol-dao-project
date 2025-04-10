// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./NFTMembership.sol";
import "./Treasury.sol";
import "./Governance.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// Remove the Counters import

/**
 * @title DAOFactory
 * @dev Creates and manages DAOs for different organizations
 */
contract DAOFactory {
    // Replace Counters with a simple uint256
    uint256 private _daoIdCounter;

    struct DAO {
        uint256 id;
        string name;
        address owner;
        address membershipContract;
        address treasuryContract;
        address governanceContract;
        bool active;
    }

    // Mapping from DAO ID to DAO details
    mapping(uint256 => DAO) public daos;
    // Mapping from organization address to their DAO IDs
    mapping(address => uint256[]) public organizationDAOs;
    // USDC token address
    address public usdcToken;

    event DAOCreated(uint256 daoId, string name, address owner, address membershipContract, address treasuryContract, address governanceContract);
    event DAODeactivated(uint256 daoId);

    constructor(address _usdcToken) {
        require(_usdcToken != address(0), "Invalid USDC address");
        usdcToken = _usdcToken;
        // Initialize counter at 0
        _daoIdCounter = 0;
    }

    /**
     * @dev Creates a new DAO for an organization
     * @param _name Name of the DAO
     * @param _membershipFee Fee required to join the DAO
     * @param _proposalThreshold Minimum votes required for a proposal to pass
     * @return daoId ID of the newly created DAO
     */
    function createDAO(
        string memory _name,
        uint256 _membershipFee,
        uint256 _proposalThreshold
    ) public returns (uint256) {
        // Increment counter directly
        _daoIdCounter++;
        uint256 newDaoId = _daoIdCounter;

        // Create the NFT membership contract
        NFTMembership membershipContract = new NFTMembership(
            _name,
            string(abi.encodePacked(_name, " Membership")),
            _membershipFee,
            usdcToken,
            msg.sender
        );

        // Create the treasury contract
        Treasury treasuryContract = new Treasury(usdcToken, address(membershipContract), address(this));
        
        // Create the governance contract
        Governance governanceContract = new Governance(
            usdcToken,
            address(membershipContract),
            address(treasuryContract),
            _proposalThreshold,
            msg.sender
        );

        // Set governance address in treasury
        treasuryContract.setGovernanceContract(address(governanceContract));
        treasuryContract.transferOwnership(msg.sender);

        // Store DAO information
        daos[newDaoId] = DAO({
            id: newDaoId,
            name: _name,
            owner: msg.sender,
            membershipContract: address(membershipContract),
            treasuryContract: address(treasuryContract),
            governanceContract: address(governanceContract),
            active: true
        });

        organizationDAOs[msg.sender].push(newDaoId);

        emit DAOCreated(
            newDaoId,
            _name,
            msg.sender,
            address(membershipContract),
            address(treasuryContract),
            address(governanceContract)
        );

        return newDaoId;
    }

    // Rest of the contract remains the same
    /**
     * @dev Deactivates a DAO
     * @param _daoId ID of the DAO to deactivate
     */
    function deactivateDAO(uint256 _daoId) public {
        require(daos[_daoId].owner == msg.sender, "Not the DAO owner");
        require(daos[_daoId].active, "DAO already deactivated");

        daos[_daoId].active = false;
        emit DAODeactivated(_daoId);
    }

    /**
     * @dev Gets all DAOs created by an organization
     * @param _organization Address of the organization
     * @return Array of DAO IDs created by the organization
     */
    function getOrganizationDAOs(address _organization) public view returns (uint256[] memory) {
        return organizationDAOs[_organization];
    }

    /**
     * @dev Gets a DAO's details
     * @param _daoId ID of the DAO
     * @return DAO details
     */
    function getDAO(uint256 _daoId) public view returns (DAO memory) {
        return daos[_daoId];
    }
}