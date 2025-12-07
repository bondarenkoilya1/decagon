import type { FC } from "react";

import { Arrow, Line } from "src/entities";

import { type ClassNameProp, cn, CONTAINER_SIDE_LENGTH, type CoordinatesType } from "src/shared";

type VectorProps = ClassNameProp & { placement: CoordinatesType; markerId?: string };

export const Vector: FC<VectorProps> = ({ placement, markerId = "head", className }) => {
  const placementCoordinates = Object.values(placement);
  const isZeroVector = placementCoordinates.every((value) => value === 0);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${CONTAINER_SIDE_LENGTH} ${CONTAINER_SIDE_LENGTH}`}
      className={cn("[transform:scale(1,-1)]", className)}>
      <defs>{!isZeroVector && <Arrow markerId={markerId} x={0.1} y={2} />}</defs>
      <g transform={`translate(${CONTAINER_SIDE_LENGTH / 2},${CONTAINER_SIDE_LENGTH / 2})`}>
        <Line markerId={markerId} {...placement} />
      </g>
    </svg>
  );
};
