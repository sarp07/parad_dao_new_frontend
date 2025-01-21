import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

const LOCKED_WALLETS = [
  "0x09B3b90582c7D3d1187dED2d521Be451c1b62eC8",
  "0xD1C175E83Fd2B8d8bDeB620038F55F2BAeC371C3",
  "0x166178c9e8Dcea04E4C7731B6ae3E605758ce745",
  "0x0E4Ef8c2A8cD88ac3Dc5F59cB315A8dE2d2f24f7",
  "0x7B29AA7e052f05Aaff1C14665aaE26979FC8A2f5",
  "0x89B6aA3B0cF54776daB1c962546af08a78bd3126"
];

const TOKEN_CONTRACT = "0x660687e0E0E5283656909a71B59491EaC3672A8F";
const RPC_URL = "https://bsc-dataseed1.binance.org/";

export async function GET() {
  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    
    // Tek bir kontrat instance'ı oluşturalım, iki fonksiyon için de kullanabiliriz
    const contract = new ethers.Contract(
      TOKEN_CONTRACT,
      [
        "function balanceOf(address) view returns (uint256)",
        "function totalSupply() view returns (uint256)"
      ],
      provider
    );

    // Önce total supply'i çekelim
    const totalSupplyBN = await contract.totalSupply();

    let totalLocked = ethers.parseEther("0");
    
    // Kilitli cüzdanların bakiyelerini topla
    for (const wallet of LOCKED_WALLETS) {
      const balance = await contract.balanceOf(wallet);
      totalLocked = totalLocked + balance;
    }

    // Total supply'den kilitli tokenleri çıkar
    const circulatingSupply = totalSupplyBN - totalLocked;
    
    return NextResponse.json({
      result: ethers.formatEther(circulatingSupply)
    });
  } catch (error) {
    console.error("Error in circulating supply calculation:", error);
    return NextResponse.json({
      result: "0"
    }, { status: 500 });
  }
} 