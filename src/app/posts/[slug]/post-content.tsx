"use client";

import Views from "@/app/_components/views";
import useAccessCounter from "@/hooks/useAccessCounter";
import useCommentCount from "@/hooks/useCommentCount";

type Props = {
  slug: string;
};

export default function PostContent({ slug }: Props) {
  const viewCount = useAccessCounter(slug);

  return (
    <>
      <Views views={viewCount}></Views>
    </>
  );
}
