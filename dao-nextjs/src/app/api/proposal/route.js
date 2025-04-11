import { NextResponse } from 'next/server';
import { evaluateGitHubRepo } from '../../../components/score'; // Adjust the import path as necessary
import { ethers } from 'ethers';
import { createProposal } from '@/lib/governance-contract';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['projectName', 'description', 'fundingAmount', 'votingPeriod', 'githubLink', 'signerAddress', 'signature', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const { 
      projectName, 
      description, 
      fundingAmount, 
      votingPeriod, 
      githubLink,
      signerAddress,
      signature,
      message
    } = body;

    try {
        // Verify the signature
        const recoveredAddress = ethers.verifyMessage(message, signature);
        if (recoveredAddress.toLowerCase() !== signerAddress.toLowerCase()) {
            return NextResponse.json(
                { error: 'Invalid signature' },
                { status: 401 }
            );
        }

        const evaluation = await evaluateGitHubRepo(githubLink);
        console.log('GitHub Evaluation:', evaluation);

        // Check if evaluation score is above 4
        if (evaluation.score <= 4) {
            return NextResponse.json({
                success: false,
                message: 'Proposal rejected: GitHub repository evaluation score is too low',
                data: {
                    evaluation,
                    minimumRequiredScore: 4
                }
            }, { status: 400 });
        }

        // Setup provider
        const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
        
        // Create proposal using the governance contract
        const proposalTx = await createProposal(
            projectName,
            description,
            ethers.parseEther(fundingAmount.toString()),
            votingPeriod,
            signerAddress
        );

        // Wait for the transaction to be mined
        const receipt = await proposalTx.wait();
        
        return NextResponse.json({
            success: true,
            message: 'Proposal created successfully',
            data: {
                ...body,
                evaluation,
                transactionHash: receipt.transactionHash
            }
        });

    } catch (error) {
        console.error('Error in proposal creation:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create proposal' },
            { status: 500 }
        );
    }

  } catch (error) {
    console.error('Error processing proposal:', error);
    return NextResponse.json(
      { error: 'Failed to process proposal' },
      { status: 500 }
    );
  }
}
