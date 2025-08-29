import { NextResponse } from "next/server";
import { realtimeDb as db } from "@/lib/firebase/admin";
import { incrementCounter } from "@/utils/counter-utils";

type Params = {
  params: {
    slug: string;
  };
};

export async function POST(request: Request, { params }: Params) {
  const { slug } = params;
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
