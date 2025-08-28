import PostContent from "../posts/[slug]/post-content";
import Caption from "./caption";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Views from "./views";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
};

export function PostHeader({ title, coverImage, date, slug }: Props) {
  return (
    <>
      <Caption caption={title}></Caption>
      <div className="mb-8 mr-5 flex justify-end">
        <div className="border-r-2 border-gray-800 pr-4 mr-4">
          <DateFormatter dateString={date}></DateFormatter>
        </div>
        <div>
          <PostContent slug={slug} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 image-center">
        <div className="w-2/3">
          <CoverImage title={title} src={coverImage} />
        </div>
      </div>
    </>
  );
}
