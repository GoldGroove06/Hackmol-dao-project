// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// Remove the Counters import

/**
 * @title NFTMembership
 * @dev Manages membership NFTs for a DAO
 */
contract NFTMembership is ERC721Enumerable, Ownable {
    // Replace Counters with a simple uint256
    uint256 private _tokenIdCounter;

    uint256 public membershipFee;
    address public usdcToken;
    string public daoName;
    
    // Mapping from address to whether they are members
    mapping(address => bool) public members;
    // Mapping from address to their token ID
    mapping(address => uint256) public memberTokens;

    event MemberAdded(address member, uint256 tokenId);
    event MembershipFeeUpdated(uint256 newFee);

    constructor(
        string memory _daoName,
        string memory _tokenName,
        uint256 _membershipFee,
        address _usdcToken,
        address initialOwner
    ) ERC721(_tokenName, string(abi.encodePacked(_tokenName, "NFT"))) Ownable(initialOwner) {
        daoName = _daoName;
        membershipFee = _membershipFee;
        usdcToken = _usdcToken;
        // Initialize counter at 0
        _tokenIdCounter = 0;
    }

    /**
     * @dev Allows users to join the DAO by paying the membership fee
     */
    function joinDAO() public {
        require(!members[msg.sender], "Already a member");
        
        IERC20 usdc = IERC20(usdcToken);
        require(usdc.transferFrom(msg.sender, owner(), membershipFee), "USDC transfer failed");
        
        // Increment counter directly
        _tokenIdCounter++;
        uint256 tokenId = _tokenIdCounter;
        
        _mint(msg.sender, tokenId);
        
        members[msg.sender] = true;
        memberTokens[msg.sender] = tokenId;
        
        emit MemberAdded(msg.sender, tokenId);
    }

    /**
     * @dev Updates the membership fee
     * @param _newFee New membership fee amount
     */
    function updateMembershipFee(uint256 _newFee) public onlyOwner {
        membershipFee = _newFee;
        emit MembershipFeeUpdated(_newFee);
    }

    /**
     * @dev Checks if an address is a member
     * @param _address Address to check
     * @return True if the address is a member
     */
    function isMember(address _address) public view returns (bool) {
        return members[_address];
    }

    /**
     * @dev Gets total number of members
     * @return Total member count
     */
    function getMemberCount() public view returns (uint256) {
        return _tokenIdCounter;
    }

    // Override transfer functions to update membership status
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721Enumerable) returns (address) {
        address from = super._update(to, tokenId, auth);
        
        if (from != address(0)) {
            members[from] = false;
            memberTokens[from] = 0;
        }
        
        if (to != address(0)) {
            members[to] = true;
            memberTokens[to] = tokenId;
        }
        
        return from;
    }
}
