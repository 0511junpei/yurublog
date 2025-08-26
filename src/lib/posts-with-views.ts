import { getAllPosts } from "./api";
import { getAllViews } from "./db-api";

export async function getPostsWithViews() {
  const posts = getAllPosts();
  const allViews = await getAllViews();

  const postsWithViews = posts.map((post) => ({
    ...post,
    views: allViews[post.slug] || 0,
  }));

  return postsWithViews;
}
