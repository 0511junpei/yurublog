import PostContent from "./access-count";
import Caption from "./caption";
import { CommentCount } from "./comment-count";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

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
        <div className=" pr-4 mx-2">
          <DateFormatter dateString={date}></DateFormatter>
        </div>
        <div className=" px-1 mx-1">
          <PostContent slug={slug} />
        </div>
        <div className=" px-1 mx-1">
          <CommentCount slug={slug} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 image-center">
        <div className="w-10/12">
          <CoverImage title={title} src={coverImage} />
        </div>
      </div>
    </>
  );
}
