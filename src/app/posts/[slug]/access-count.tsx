"use client";

import { Loading } from "@/app/_components/loading";
import useAccessCounter from "@/hooks/useAccessCounter";
import useCommentCount from "@/hooks/useCommentCount";

type Props = {
  slug: string;
};

export default function AccessCount({ slug }: Props) {
  const { accessCount, isLoading } = useAccessCounter(slug);

  return (
    <>
      <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm ">
        <svg
          className="w-6 h-6 mr-1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        {isLoading ? <Loading /> : accessCount}
      </span>
    </>
  );
}
