"use client";
import { postsWithMetrics } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { getCoverImage } from "@/lib/api";
import Caption from "./caption";
import { useEffect, useState } from "react";
import Container from "./container";
import { CommentDisplay } from "@/interfaces/comment";
import { Loading } from "./loading";
import useCommentCount from "@/hooks/useCommentCount";

type Props = {
  slug: string;
};

export function CommentCount({ slug }: Props) {
  const { commentCount, isLoading } = useCommentCount(slug);

  return (
    <div className="">
      <span className="text-gray-500 inline-flex items-center leading-none text-sm">
        <svg
          className="w-6 h-6 mr-1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>
        {isLoading ? <Loading /> : commentCount}
      </span>
    </div>
  );
}
