import type { FC } from "react";

type ArrowProps = {
  markerId: string;
  x: number;
  y: number;
};

export const Arrow: FC<ArrowProps> = ({ markerId, x, y }) => {
  return (
    <marker
      id={markerId}
      orient="auto"
      markerWidth="3"
      markerHeight="4"
      refX={String(x)}
      refY={String(y)}>
      <path d="M0,0 V4 L2,2 Z" fill="#dc0000" />
    </marker>
  );
};
