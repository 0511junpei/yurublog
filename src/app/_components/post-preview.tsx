import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
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
          {/* <div className="text-center">
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div> */}
        </div>
      </Link>
    </div>

    // <div>
    //   <div className="mb-5">
    //     <CoverImage slug={slug} title={title} src={coverImage} />
    //   </div>
    //   <h3 className="text-3xl mb-3 leading-snug">
    //     <Link href={`/posts/${slug}`} className="hover:underline">
    //       {title}
    //     </Link>
    //   </h3>
    //   <div className="text-lg mb-4">
    //     <DateFormatter dateString={date} />
    //   </div>
    //   <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    //   <Avatar name={author.name} picture={author.picture} />
    // </div>
  );
}
