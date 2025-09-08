import { NextRequest, NextResponse } from "next/server";

export async function parseRequestBody(request: NextRequest) {
  try {
    return await request.json();
  } catch (error) {
    console.error("Failed to parse JSON body:", error);
    return null;
  }
}
