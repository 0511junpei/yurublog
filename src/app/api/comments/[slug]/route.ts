import { NextRequest, NextResponse } from "next/server";
import { firestoreDb as db } from "@/lib/firebase/admin";

export async function POST(request: NextRequest, { params }: any) {
  const { slug } = params;
  let body;

  if (
    process.env.NODE_ENV !== "production" ||
    (request &&
      request.headers &&
      request.headers.get("content-length") !== null)
  ) {
    try {
      body = await request.json();
    } catch (error) {
      console.error("Failed to parse JSON body:", error);
      return NextResponse.json(
        { message: "Invalid or empty JSON body." },
        { status: 400 }
      );
    }
  }

  // bodyが正常にパースされたか確認
  if (
    !body ||
    typeof body.authorName !== "string" ||
    typeof body.comment !== "string"
  ) {
    return NextResponse.json(
      { message: "Missing required fields (authorName or comment)." },
      { status: 400 }
    );
  }

  const { authorName, comment } = body;
  if (!comment) {
    return NextResponse.json(
      { message: "フィールドが見つかりません" },
      { status: 400 }
    );
  }

  try {
    const commentsCollection = db
      .collection("posts")
      .doc(slug)
      .collection("comments");

    await commentsCollection.add({
      authorName: authorName,
      comment: comment,
      timestamp: new Date(),
    });
    return NextResponse.json({ message: "コメント送信に成功しました" });
  } catch (error) {
    console.error("コメントの送信に失敗しました：", error);
    return NextResponse.json(
      { message: "コメント送信に失敗しました" },
      { status: 500 }
    );
  }
}
