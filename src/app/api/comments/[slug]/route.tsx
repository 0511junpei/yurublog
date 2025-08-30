import { NextResponse } from "next/server";
import { firestoreDb as db } from "@/lib/firebase/admin";

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const { authorName, comment } = await request.json();

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
