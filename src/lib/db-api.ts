import { db } from "./firebase/admin";

export async function getViewsBySlug(slug: string): Promise<number> {
  const counterRef = db.ref(`posts/${slug}/views`);
  const snapshot = await counterRef.once("value");
  return snapshot.val() || 0;
}

export async function getAllViews(): Promise<{ [slug: string]: number }> {
  const counterRef = db.ref("posts");
  const snapshot = await counterRef.once("value");
  const posts = snapshot.val();
  if (!posts) {
    return {};
  }

  const views: { [slug: string]: number } = {};
  for (const slug in posts) {
    if (posts[slug] && posts[slug].views !== undefined) {
      views[slug] = posts[slug].views;
    }
  }
  return views;
}
