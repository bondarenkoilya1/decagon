import type { FC } from "react";

import { useVectorPlacement } from "src/app";

import { CopyVectorPlacementButton, useVectorProperties } from "src/features";

import { CoordinatesDisplay } from "src/entities";

import { Panel, Typography } from "src/shared";

export const VectorPropertiesPanel: FC = () => {
  const { vectorCoordinates, startCoordinates, endCoordinates } = useVectorProperties();
  const vectorPlacement = useVectorPlacement();

  return (
    <Panel>
      <Typography.H5 className="inline">
        Current <Typography.Highlighted>vector coordinates</Typography.Highlighted>:{" "}
      </Typography.H5>
      <span>
        <CoordinatesDisplay letter="V" coordinates={vectorCoordinates} />
      </span>
      , where:
      <div className="mt-3">
        <CoordinatesDisplay letter="A" coordinates={startCoordinates} />
        <CoordinatesDisplay letter="B" coordinates={endCoordinates} />
      </div>
      <Typography.Shy className="mt-2.5">
        A is the starting point, B is the ending point of the vector
      </Typography.Shy>{" "}
      <CopyVectorPlacementButton
        vectorPlacement={JSON.stringify(vectorPlacement)}
        className="w-full mt-3"
      />
    </Panel>
  );
};
