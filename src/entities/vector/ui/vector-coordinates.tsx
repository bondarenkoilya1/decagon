import type { JSX } from "react";

type VectorCoordinatesProps = {
  letter?: string;
  coordinates: number[];
};

export const VectorCoordinates = ({ letter, coordinates }: VectorCoordinatesProps): JSX.Element => {
  return (
    <p className="inline-block [&:not(:last-child)]:mr-[10px]">
      {letter} <Coordinates coordinates={coordinates} />
    </p>
  );
};

const Coordinates = ({ coordinates }: Pick<VectorCoordinatesProps, "coordinates">): JSX.Element => {
  return (
    <>
      (
      {coordinates.map((coordinate, index) => (
        <span key={crypto.randomUUID()}>
          {coordinate}
          {index !== coordinates.length - 1 && "; "}
        </span>
      ))}
      )
    </>
  );
};
