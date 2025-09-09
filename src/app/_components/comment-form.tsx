"use client";
import { postsWithMetrics } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { getCoverImage } from "@/lib/api";
import Caption from "./caption";
import { useEffect, useState } from "react";
import Container from "./container";
import useCommentForm from "@/hooks/useCommentForm";
import { CommentFormData } from "@/interfaces/comment";
import { Loading } from "./loading";
import { toast } from "react-toastify";

type Props = {
  slug: string;
};

export function CommentForm({ slug }: Props) {
  const MAX_LENGTH_COMMENT = 1000;
  const [authorName, setAuthorName] = useState("");
  const [comment, setComment] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);
  const { submitComment, isLoading, error } = useCommentForm(slug);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInputError(null);

    if (comment.trim() === "") {
      setInputError("コメントは必須入力です");
      return;
    } else if (comment.length > MAX_LENGTH_COMMENT) {
      setInputError(
        `コメントは${MAX_LENGTH_COMMENT}文字以内で入力してください`
      );
      return;
    }

    await submitComment({
      authorName: authorName,
      comment: comment,
    } as CommentFormData);

    if (error) {
      toast.error(error);
      return;
    }
    setAuthorName("");
    setComment("");
    toast.success("コメントの投稿が完了しました!");
  };

  const submitButtonCaption = () =>
    isLoading ? <Loading color="white" /> : "コメント";

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
          disabled={isLoading}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </div>
      <div className="mt-1">
        {inputError && <p className="text-red-500">{inputError}</p>}
        <textarea
          id="comment"
          name="comment"
          className={`w-full bg-white rounded border focus:border-green-400 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 my-1 resize-none leading-6 transition-colors duration-200 ease-in-out ${
            inputError ? "border-red-400" : "border-gray-300"
          }`}
          maxLength={MAX_LENGTH_COMMENT}
          placeholder="コメントを追加"
          value={comment}
          disabled={isLoading}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="text-right">
        <button
          className="text-white bg-green-400 border-0 py-2 px-6 focus:outline-none  rounded text-lg min-h-10"
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {submitButtonCaption()}
        </button>
      </div>
    </>
  );
}
