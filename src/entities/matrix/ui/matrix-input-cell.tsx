import type { FC } from "react";
import type { IndexingType } from "src/shared";

import { Input } from "src/shared";

type MatrixInputCellProps = {
  i: number;
  j: number;
  cell: number;
  matrixIndexingMode: IndexingType;
};

export const MatrixInputCell: FC<MatrixInputCellProps> = ({ i, j, cell, matrixIndexingMode }) => {
  const tooltip = matrixIndexingMode === "zero" ? `[${i}][${j}]` : `[${i + 1}][${j + 1}]`;

  return (
    <Input
      key={tooltip}
      type="number"
      className="w-full text-center"
      defaultValue={cell}
      title={tooltip}
    />
  );
};
