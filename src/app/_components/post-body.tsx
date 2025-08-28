import Container from "./container";
import { MarkDownContent } from "./markdown-content";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <Container>
      <MarkDownContent content={content}></MarkDownContent>
    </Container>
  );
}
