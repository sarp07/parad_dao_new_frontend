import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

const TOKEN_CONTRACT = "0xc011c17E3cBA7f16Df7fDE8C8cbE7C2511a07783"; 
const RPC_URL = "https://bsc-dataseed1.binance.org/"; 

export async function GET() {
  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const contract = new ethers.Contract(
      TOKEN_CONTRACT,
      ["function totalSupply() view returns (uint256)"],
      provider
    );

    const totalSupply = await contract.totalSupply();
    
    return NextResponse.json({
      result: ethers.formatEther(totalSupply)
    });
  } catch (error) {
    console.error("Error fetching total supply:", error);
    return NextResponse.json({
      result: "0"
    }, { status: 500 });
  }
} 