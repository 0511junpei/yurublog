import { ReactNode } from "react";
import Caption from "./caption";
import { SectionSeparator } from "./section-separator";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <div className="py-6">
      <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-center mb-6 border">
        {children}
      </h1>
    </div>
  );
}
