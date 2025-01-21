import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

const LOCKED_WALLETS = [
  "0xD1C175E83Fd2B8d8bDeB620038F55F2BAeC371C3",
  "0x166178c9e8Dcea04E4C7731B6ae3E605758ce745",
  "0x0E4Ef8c2A8cD88ac3Dc5F59cB315A8dE2d2f24f7",
  "0x7B29AA7e052f05Aaff1C14665aaE26979FC8A2f5",
  "0x89B6aA3B0cF54776daB1c962546af08a78bd3126",
  "0x1EafF5de807c6E4a1185F2D111272DA2619cf2ED"
];

const TOTAL_SUPPLY = "500000000"; 
const TOKEN_CONTRACT = "0x660687e0E0E5283656909a71B59491EaC3672A8F"; 
const RPC_URL = "https://bsc-dataseed1.binance.org/"; 

export async function GET() {
  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const tokenContract = new ethers.Contract(
      TOKEN_CONTRACT,
      ["function balanceOf(address) view returns (uint256)"],
      provider
    );

    let totalLocked = ethers.parseEther("0");
    
    // Kilitli cüzdanların bakiyelerini topla
    for (const wallet of LOCKED_WALLETS) {
      const balance = await tokenContract.balanceOf(wallet);
      totalLocked = totalLocked + balance;
    }

    // Total supply'den kilitli tokenleri çıkar
    const totalSupplyBN = ethers.parseEther(TOTAL_SUPPLY);
    const circulatingSupply = totalSupplyBN - totalLocked;
    
    return NextResponse.json({
      result: ethers.formatEther(circulatingSupply)
    });
  } catch (error) {
    return NextResponse.json({
      result: "0"
    }, { status: 500 });
  }
} 