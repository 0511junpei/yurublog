import Caption from "./caption";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <Caption caption={title}></Caption>
      <div className="mb-8 mr-5 justify-items-end">
        <DateFormatter dateString={date}></DateFormatter>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 image-center">
        <div className="w-2/3">
          <CoverImage title={title} src={coverImage} />
        </div>
      </div>
    </>
  );
}
