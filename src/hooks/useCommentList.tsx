"use client";

import { CommentDisplay } from "@/interfaces/comment";
import { firestoreDb as db } from "@/lib/firebase/client";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useCommentList(slug: string) {
  const [comments, setComments] = useState<CommentDisplay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const commentsCollection = collection(db, `posts/${slug}/comments`);
    const q = query(commentsCollection, orderBy("timestamp", "desc"));
    console.log(q);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newComments = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            authorName: doc.data().authorName,
            timestamp: doc.data().timestamp.toDate().toLocaleString(),
            comment: doc.data().comment,
          } as CommentDisplay)
      );
      setComments(newComments);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [slug]);

  return { comments, loading };
}
