// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTMembership.sol";

/**
 * @title Treasury
 * @dev Manages the funds of the DAO
 */
contract Treasury is Ownable {
    address public usdcToken;
    address public membershipContract;
    address public governanceContract;
    
    struct Payment {
        address recipient;
        uint256 amount;
        string description;
        bool executed;
    }
    
    Payment[] public payments;
    
    event FundsReceived(address from, uint256 amount);
    event PaymentExecuted(uint256 paymentId, address recipient, uint256 amount, string description);
    event GovernanceContractSet(address governanceContract);

    modifier onlyGovernance() {
        require(msg.sender == governanceContract, "Only governance can call");
        _;
    }

    modifier onlyMember() {
        require(NFTMembership(membershipContract).isMember(msg.sender), "Not a DAO member");
        _;
    }

    constructor(
        address _usdcToken,
        address _membershipContract,
        address initialOwner
    ) Ownable(initialOwner) {
        usdcToken = _usdcToken;
        membershipContract = _membershipContract;
    }

    /**
     * @dev Sets the governance contract
     * @param _governanceContract Address of the governance contract
     */
    function setGovernanceContract(address _governanceContract) public onlyOwner {
    require(_governanceContract != address(0), "Invalid governance contract address");
    governanceContract = _governanceContract;
    emit GovernanceContractSet(_governanceContract);
}

    /**
     * @dev Allows members to deposit funds into the treasury
     * @param _amount Amount of USDC to deposit
     */
    function depositFunds(uint256 _amount) public onlyMember {
        IERC20 usdc = IERC20(usdcToken);
        require(usdc.transferFrom(msg.sender, address(this), _amount), "USDC transfer failed");
        
        emit FundsReceived(msg.sender, _amount);
    }

    /**
     * @dev Creates a payment request (called by governance after proposal approval)
     * @param _recipient Recipient of the payment
     * @param _amount Amount of USDC to pay
     * @param _description Description of the payment
     * @return paymentId ID of the created payment
     */
    function createPayment(
        address _recipient,
        uint256 _amount,
        string memory _description
    ) public onlyGovernance returns (uint256) {
        uint256 paymentId = payments.length;
        
        payments.push(Payment({
            recipient: _recipient,
            amount: _amount,
            description: _description,
            executed: false
        }));
        
        return paymentId;
    }

    /**
     * @dev Executes a payment (called by governance after approval)
     * @param _paymentId ID of the payment to execute
     */
    function executePayment(uint256 _paymentId) public onlyGovernance {
        require(_paymentId < payments.length, "Invalid payment ID");
        Payment storage payment = payments[_paymentId];
        
        require(!payment.executed, "Payment already executed");
        
        IERC20 usdc = IERC20(usdcToken);
        require(usdc.balanceOf(address(this)) >= payment.amount, "Insufficient treasury funds");
        
        payment.executed = true;
        require(usdc.transfer(payment.recipient, payment.amount), "USDC transfer failed");
        
        emit PaymentExecuted(_paymentId, payment.recipient, payment.amount, payment.description);
    }

    /**
     * @dev Gets the treasury balance
     * @return Current USDC balance of the treasury
     */
    function getBalance() public view returns (uint256) {
        return IERC20(usdcToken).balanceOf(address(this));
    }

    /**
     * @dev Gets all payments
     * @return Array of all payments
     */
    function getAllPayments() public view returns (Payment[] memory) {
        return payments;
    }
}