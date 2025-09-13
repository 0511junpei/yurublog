type Props = {
  color?: string;
  size?: number;
};

const bgColorMap: { [key: string]: string } = {
  green: "bg-green-400",
  white: "bg-white",
};

const sizeMap: { [key: number]: string } = {
  1: "h-1 w-1",
  2: "h-2 w-2",
};

export function Loading({ color, size }: Props) {
  const bgColorClassName = bgColorMap[color || "green"] ?? bgColorMap["green"];
  const sizeClassName = sizeMap[size || 1] ?? sizeMap[1];

  return (
    <div className="flex justify-center" aria-label="読み込み中">
      <div
        className={`animate-ping ${sizeClassName} ${bgColorClassName} rounded-full`}
      ></div>
      <div
        className={`animate-ping ${sizeClassName} ${bgColorClassName} rounded-full mx-2`}
      ></div>
      <div
        className={`animate-ping ${sizeClassName} ${bgColorClassName} rounded-full`}
      ></div>
    </div>
  );
}
