import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostContent from "../posts/[slug]/post-content";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  views: number;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  views,
}: Props) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <Link href={`/posts/${slug}`}>
        <div className="bg-gray-400 bg-opacity-40 p-6 rounded-lg">
          <div className="text-gray-500 lg:ml-auto md:ml-0 mb-4 text-base">
            <DateFormatter dateString={date} />
          </div>
          <div className="mb-4">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
          <p className="leading-relaxed text-lg">{title}</p>
          <div className="text-center">
            <PostContent slug={slug} />
          </div>
        </div>
      </Link>
    </div>
  );
}
