import { NextResponse } from 'next/server';

export async function GET() {
  const response = {
    isSuccessfully: true,
    data: {
      totalSupply: "500000000.0",
      timestamp: new Date().toISOString()
    },
    message: "Total supply fetched successfully"
  };

  return NextResponse.json(response);
} 