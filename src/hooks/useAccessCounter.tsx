"use client";

import { realtimeDb as db } from "@/lib/firebase/client";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAccessCounter(slug: string) {
  const [accessCount, setAccessCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function updateCounter() {
      const hasVisitedKey = `hasVisited-${slug}`;
      try {
        if (!sessionStorage.getItem(hasVisitedKey)) {
          await fetch(`/api/counter/${slug}`, { method: "POST" });
          sessionStorage.setItem(hasVisitedKey, "true");
        }
      } catch (error) {
        console.error("カウンター更新APIの呼び出しに失敗：", error);
      }
    }

    const counterRef = ref(db, `posts/${slug}/views`);

    const unsubscribe = onValue(counterRef, (snapshot) => {
      const newCount = snapshot.val() || 0;
      setAccessCount(newCount);
      setIsLoading(false);
    });

    updateCounter();

    return () => unsubscribe();
  }, [slug]);

  return { accessCount, isLoading };
}
