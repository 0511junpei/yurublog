import { notFound } from "next/navigation";
import { getLegal } from "@/lib/api";
import Container from "@/app/_components/container";
import { MarkDownContent } from "../_components/markdown-content";

export default async function PlivacyPolicy() {
  const privacyPolicy = getLegal("privacy-policy");

  if (!privacyPolicy) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <MarkDownContent content={privacyPolicy.content}></MarkDownContent>
      </Container>
    </main>
  );
}
