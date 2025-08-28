"use client";

import { CommentList } from "@/app/_components/comment-list";
import { useCommentList } from "@/hooks/useCommentList";

type Props = {
  slug: string;
};

export default function PostCommentList({ slug }: Props) {
  const { comments, loading } = useCommentList(slug);
  return <CommentList comments={comments} loading={loading}></CommentList>;
}
