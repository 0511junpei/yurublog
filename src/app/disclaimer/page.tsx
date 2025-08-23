import { notFound } from "next/navigation";
import { getLegal } from "@/lib/api";
import Container from "@/app/_components/container";
import { MarkDownContent } from "../_components/markdown-content";

export default async function Disclaimer() {
  const disclaimer = getLegal("disclaimer");

  if (!disclaimer) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <MarkDownContent content={disclaimer.content}></MarkDownContent>
      </Container>
    </main>
  );
}
