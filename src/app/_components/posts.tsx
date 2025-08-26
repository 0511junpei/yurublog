import { postsWithMetrics } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { getCoverImage } from "@/lib/api";
import Caption from "./caption";

type Props = {
  posts: postsWithMetrics[];
};

export function Posts({ posts }: Props) {
  return (
    <section className="text-gray-600 body-font">
      <Caption caption="記事一覧"></Caption>
      <div className="container mx-auto">
        <div className="flex flex-wrap w-full">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={getCoverImage(post.coverImage)}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              views={post.views}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
