"use client";

import { CommentFormData } from "@/interfaces/comment";
import { firestoreDb as db } from "@/lib/firebase/client";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useCommentForm(slug: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitComment = async (form: CommentFormData) => {
    setLoading(true);
    setError(null);

    try {
      const authorName = form.authorName;
      const comment = form.comment;
      const response = await fetch(`/api/comments/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authorName, comment }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }
    } catch (error) {
      setError("コメントの投稿に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return { submitComment, loading, error };
}
