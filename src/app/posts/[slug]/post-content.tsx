"use client";

import Views from "@/app/_components/views";
import useAccessCounter from "@/hooks/useAccessCounter";

type Props = {
  slug: string;
};

export default function PostContent({ slug }: Props) {
  // フックを呼び出し、リアルタイムな閲覧数を取得
  const viewCount = useAccessCounter(slug);

  return <Views views={viewCount}></Views>;
}
