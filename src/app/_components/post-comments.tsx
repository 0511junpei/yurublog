"use client";
import { postsWithMetrics } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { getCoverImage } from "@/lib/api";
import Caption from "./caption";
import { useEffect, useState } from "react";
import Container from "./container";

import { CommentForm } from "./comment-form";
import PostCommentList from "../posts/[slug]/post-comment-list";

type Props = {
  slug: string;
};

export function PostComments({ slug }: Props) {
  return (
    <>
      <Caption caption={"コメント"}></Caption>
      <Container>
        <CommentForm slug={slug} />
        <PostCommentList slug={slug} />
      </Container>
    </>
  );
}
