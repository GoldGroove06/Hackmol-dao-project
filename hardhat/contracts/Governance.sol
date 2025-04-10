// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTMembership.sol";
import "./Treasury.sol";

/**
 * @title Governance
 * @dev Manages proposals and voting for the DAO
 */
contract Governance is Ownable {
    address public usdcToken;
    address public membershipContract;
    address public treasuryContract;
    uint256 public proposalThreshold;
    
    enum ProposalStatus { Active, Approved, Rejected, Executed }
    
    struct Proposal {
        uint256 id;
        address proposer;
        string title;
        string description;
        uint256 amount;
        address recipient;
        uint256 yesVotes;
        uint256 noVotes;
        ProposalStatus status;
        uint256 startTime;
        uint256 endTime;
        mapping(address => bool) hasVoted;
    }
    
    struct ProposalView {
        uint256 id;
        address proposer;
        string title;
        string description;
        uint256 amount;
        address recipient;
        uint256 yesVotes;
        uint256 noVotes;
        ProposalStatus status;
        uint256 startTime;
        uint256 endTime;
    }
    
    uint256 private _proposalCounter;
    mapping(uint256 => Proposal) public proposals;
    
    event ProposalCreated(uint256 proposalId, address proposer, string title, uint256 amount);
    event Voted(uint256 proposalId, address voter, bool support);
    event ProposalExecuted(uint256 proposalId);
    event ProposalThresholdUpdated(uint256 newThreshold);

    modifier onlyMember() {
        require(NFTMembership(membershipContract).isMember(msg.sender), "Not a DAO member");
        _;
    }

    constructor(
        address _usdcToken,
        address _membershipContract,
        address _treasuryContract,
        uint256 _proposalThreshold,
        address initialOwner
    ) Ownable(initialOwner) {
        usdcToken = _usdcToken;
        membershipContract = _membershipContract;
        treasuryContract = _treasuryContract;
        proposalThreshold = _proposalThreshold;
    }

    /**
     * @dev Creates a new proposal
     * @param _title Title of the proposal
     * @param _description Description of the proposal
     * @param _amount Amount of USDC requested
     * @param _recipient Recipient of the funds if approved
     * @param _votingPeriod Duration of voting period in seconds
     * @return proposalId ID of the created proposal
     */
    function createProposal(
        string memory _title,
        string memory _description,
        uint256 _amount,
        address _recipient,
        uint256 _votingPeriod
    ) public onlyMember returns (uint256) {
        _proposalCounter++;
        uint256 proposalId = _proposalCounter;
        
        Proposal storage newProposal = proposals[proposalId];
        newProposal.id = proposalId;
        newProposal.proposer = msg.sender;
        newProposal.title = _title;
        newProposal.description = _description;
        newProposal.amount = _amount;
        newProposal.recipient = _recipient;
        newProposal.status = ProposalStatus.Active;
        newProposal.startTime = block.timestamp;
        newProposal.endTime = block.timestamp + _votingPeriod;
        
        emit ProposalCreated(proposalId, msg.sender, _title, _amount);
        
        return proposalId;
    }

    /**
     * @dev Allows members to vote on a proposal
     * @param _proposalId ID of the proposal to vote on
     * @param _support True for yes vote, false for no vote
     */
    function vote(uint256 _proposalId, bool _support) public onlyMember {
        Proposal storage proposal = proposals[_proposalId];
        
        require(proposal.id > 0, "Proposal doesn't exist");
        require(proposal.status == ProposalStatus.Active, "Proposal not active");
        require(block.timestamp <= proposal.endTime, "Voting period ended");
        require(!proposal.hasVoted[msg.sender], "Already voted");
        
        proposal.hasVoted[msg.sender] = true;
        
        if (_support) {
            proposal.yesVotes++;
        } else {
            proposal.noVotes++;
        }
        
        emit Voted(_proposalId, msg.sender, _support);
        
        // Check if voting period has ended or if the proposal has reached threshold
        if (block.timestamp > proposal.endTime || proposal.yesVotes >= proposalThreshold) {
            _finalizeProposal(_proposalId);
        }
    }

    /**
     * @dev Finalizes a proposal after voting period ends
     * @param _proposalId ID of the proposal to finalize
     */
    function finalizeProposal(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];
        
        require(proposal.id > 0, "Proposal doesn't exist");
        require(proposal.status == ProposalStatus.Active, "Proposal not active");
        require(block.timestamp > proposal.endTime, "Voting period not ended");
        
        _finalizeProposal(_proposalId);
    }

    /**
     * @dev Internal function to finalize a proposal
     * @param _proposalId ID of the proposal to finalize
     */
    function _finalizeProposal(uint256 _proposalId) internal {
        Proposal storage proposal = proposals[_proposalId];
        
        if (proposal.yesVotes > proposal.noVotes && proposal.yesVotes >= proposalThreshold) {
            proposal.status = ProposalStatus.Approved;
            
            // Create payment in treasury
            Treasury treasury = Treasury(treasuryContract);
            treasury.createPayment(proposal.recipient, proposal.amount, proposal.title);
            
            proposal.status = ProposalStatus.Executed;
            emit ProposalExecuted(_proposalId);
        } else {
            proposal.status = ProposalStatus.Rejected;
        }
    }

    /**
     * @dev Updates the proposal threshold
     * @param _newThreshold New threshold value
     */
    function updateProposalThreshold(uint256 _newThreshold) public onlyOwner {
        proposalThreshold = _newThreshold;
        emit ProposalThresholdUpdated(_newThreshold);
    }

    /**
     * @dev Gets proposal details
     * @param _proposalId ID of the proposal
     * @return Proposal details
     */
    function getProposal(uint256 _proposalId) public view returns (ProposalView memory) {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.id > 0, "Proposal doesn't exist");
        
        return ProposalView({
            id: proposal.id,
            proposer: proposal.proposer,
            title: proposal.title,
            description: proposal.description,
            amount: proposal.amount,
            recipient: proposal.recipient,
            yesVotes: proposal.yesVotes,
            noVotes: proposal.noVotes,
            status: proposal.status,
            startTime: proposal.startTime,
            endTime: proposal.endTime
        });
    }

    /**
     * @dev Checks if an address has voted on a proposal
     * @param _proposalId ID of the proposal
     * @param _voter Address to check
     * @return True if the address has voted
     */
    function hasVoted(uint256 _proposalId, address _voter) public view returns (bool) {
        return proposals[_proposalId].hasVoted[_voter];
    }

    /**
     * @dev Gets the total number of proposals
     * @return Total proposal count
     */
    function getProposalCount() public view returns (uint256) {
        return _proposalCounter;
    }
}