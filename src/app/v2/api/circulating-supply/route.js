import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

const LOCKED_WALLETS = [
  "0x26152E29BD216110b2b20e7D6234822f7f73D017", // Likidite - 173 milyon
  "0xf90860dA4132A3605c406BaB254540D13c13e3AF", // Developer - 75 milyon
  "0xAe4CfF65e66c2Bf1b5a71f738a68ECA59f91f3D9", // Marketing - 75 milyon
  "0xa48b055d17B46C65eF7DA39039d3C77e8f683A62", // Team - 48.5 milyon
  "0x52bf45D40810C974BEd86bF2DA0799A4060170dC", // Stratejik Partner - 25 milyon
  "0x245c035D53d3e69764d8796De304a69bc03649A6"  // VC Allocation - 73.5 milyon
  // Toplam: 470 milyon token locked
];

const TOKEN_CONTRACT = "0xc011c17E3cBA7f16Df7fDE8C8cbE7C2511a07783";
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