import type { FC } from "react";
import type { CoordinatesType } from "src/shared";

type LineProps = CoordinatesType & {
  markerId: string;
};

export const Line: FC<LineProps> = ({ markerId, xStart, yStart, xEnd, yEnd }) => {
  return (
    <line
      markerEnd={`url(#${markerId})`}
      x1={String(xStart)}
      y1={String(yStart)}
      x2={String(xEnd)}
      y2={String(yEnd)}
      className="stroke-red-500 stroke-2 mx-auto"
    />
  );
};
