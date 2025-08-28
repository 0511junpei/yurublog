import { realtimeDb as db } from "@/lib/firebase/admin";

export async function incrementCounter(slug: string) {
  const counterRef = db.ref(`posts/${slug}/views`);

  try {
    await counterRef.transaction((currentCount) => {
      return (currentCount || 0) + 1;
    });
    return { success: true };
  } catch (error) {
    console.error("カウントに失敗しました:", error);
    return { success: false, error };
  }
}
