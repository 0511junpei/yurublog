"use client";

type Props = {
  color?: string;
  brightness?: string;
  size?: number;
};

export function Loading(props: Props) {
  const color = !props.color ? "green" : props.color;
  const brightness =
    !props.brightness && !(color === "black" || color === "white")
      ? "-400"
      : "";
  const size = !props.size ? 1 : props.size;
  console.log(`bg-${color}${brightness}`);
  return (
    <div className="flex justify-center" aria-label="読み込み中">
      <div
        className={`animate-ping h-${size} w-${size} bg-${color}${brightness} rounded-full`}
      ></div>
      <div
        className={`animate-ping h-${size} w-${size} bg-${color}${brightness} rounded-full mx-2`}
      ></div>
      <div
        className={`animate-ping h-${size} w-${size} bg-${color}${brightness} rounded-full`}
      ></div>{" "}
    </div>
  );
}
