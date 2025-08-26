import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/admin";
import { incrementCounter } from "@/utils/counter-utils";

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
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
