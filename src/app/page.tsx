import Container from "@/app/_components/container";
import { Posts } from "@/app/_components/posts";
import { getPostsWithViews } from "@/lib/posts-with-views";

export default async function Index() {
  const allPosts = await getPostsWithViews();

  return <main>{allPosts.length > 0 && <Posts posts={allPosts} />}</main>;
}
