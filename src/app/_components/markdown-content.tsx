import markdownStyles from "./markdown-styles.module.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export function MarkDownContent({ content }: Props) {
  return (
    <div className={`${markdownStyles["markdown"]}`}>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
