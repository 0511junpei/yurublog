"use client";

import { firestoreDb as db } from "@/lib/firebase/client";
import { collection, count, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useCommentCount(slug: string) {
  const [commentCount, setCommentCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const commentsCollection = collection(db, `posts/${slug}/comments`);
    const countQuery = query(commentsCollection);
    const unsubscribe = onSnapshot(countQuery, (snapshot) => {
      setCommentCount(snapshot.size);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [slug]);

  return { commentCount, isLoading };
}
