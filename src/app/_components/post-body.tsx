import markdownStyles from "./markdown-styles.module.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkDownContent } from "./markdown-content";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return <MarkDownContent content={content}></MarkDownContent>;
}
