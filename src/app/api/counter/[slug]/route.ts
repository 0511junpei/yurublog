import { NextRequest, NextResponse } from "next/server";
import { realtimeDb as db } from "@/lib/firebase/admin";
import { incrementCounter } from "@/utils/counter-utils";

export async function POST(request: NextRequest, { params }: any) {
  const { slug } = await params;
  const result = await incrementCounter(slug);

  if (result.success) {
    return NextResponse.json({ message: "Success" });
  } else {
    return NextResponse.json(
      { message: "Failed to update counter" },
      { status: 500 }
    );
  }
}
