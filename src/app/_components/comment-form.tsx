"use client";
import { postsWithMetrics } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { getCoverImage } from "@/lib/api";
import Caption from "./caption";
import { useEffect, useState } from "react";
import Container from "./container";
import useCommentForm from "@/hooks/useCommentForm";
import { CommentFormData } from "@/interfaces/comment";

type Props = {
  slug: string;
};

export function CommentForm({ slug }: Props) {
  const [authorName, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const { submitComment, loading, error } = useCommentForm(slug);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitComment({
      authorName: authorName,
      comment: comment,
    } as CommentFormData);
  };

  return (
    <>
      <div className="mt-2">
        <input
          id="authorName"
          name="authorName"
          className="w-5/12 bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          placeholder="名前"
          type="text"
          value={authorName}
          maxLength={20}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <textarea
          id="comment"
          name="comment"
          className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 my-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
          maxLength={1000}
          placeholder="コメントを追加"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="text-right">
        <button
          className="text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg"
          type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "送信中…" : "コメント"}
        </button>
      </div>
    </>
  );
}
