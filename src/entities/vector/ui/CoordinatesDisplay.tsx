import type { FC } from "react";

type CoordinatesDisplayProps = {
  letter?: string;
  coordinates: number[];
};

export const CoordinatesDisplay: FC<CoordinatesDisplayProps> = ({ letter, coordinates }) => {
  return (
    <p className="inline-block [&:not(:last-child)]:mr-[10px]">
      {letter} (
      {coordinates.map((coordinate, index) => (
        <span key={crypto.randomUUID()}>
          {coordinate}
          {index !== coordinates.length - 1 && "; "}
        </span>
      ))}
      )
    </p>
  );
};
