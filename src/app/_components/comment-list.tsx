"use client";
import { postsWithMetrics } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { getCoverImage } from "@/lib/api";
import Caption from "./caption";
import { useEffect, useState } from "react";
import Container from "./container";
import { CommentDisplay } from "@/interfaces/comment";

type Props = {
  comments: CommentDisplay[];
  loading: boolean;
};

export function CommentList({ comments, loading }: Props) {
  return (
    <div className="my-4 px-2 py-2">
      {comments.map((comment, index) => (
        <h2
          key={comment.id}
          className="border-green-400 py-4 border-b-2  px-4  border-dotted "
        >
          <div className="flex justify-between border-b-gray-300 border-b py-2 ">
            <h3>
              <span className="text-gray-400 pr-4">No.{index + 1}</span>
              <span>
                {comment.authorName ? comment.authorName : "名無しの権兵衛"}
              </span>
            </h3>
            <h3>{comment.timestamp}</h3>
          </div>
          <div className="py-2">
            <h3 className="whitespace-pre-wrap">{comment.comment}</h3>
          </div>
        </h2>
      ))}
    </div>
  );
}
