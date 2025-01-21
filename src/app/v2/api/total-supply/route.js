import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

const TOTAL_SUPPLY = "500000000"; 

export async function GET() {
  try {
    return NextResponse.json({
      result: TOTAL_SUPPLY
    });
  } catch (error) {
    return NextResponse.json({
      result: "0"
    }, { status: 500 });
  }
} 