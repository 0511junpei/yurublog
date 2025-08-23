import { MarkDownContent } from "./markdown-content";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return <MarkDownContent content={content}></MarkDownContent>;
}
