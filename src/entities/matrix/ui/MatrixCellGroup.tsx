import type { FC } from "react";
import type { IndexingType, MatrixType } from "src/shared";

import { MatrixInputCell } from "src/entities";

export const MatrixCellGroup: FC<{
  matrix: MatrixType;
  matrixIndexingMode: IndexingType;
}> = ({ matrix, matrixIndexingMode }) => {
  return (
    <div
      className="grid gap-2 justify-center"
      style={{ gridTemplateColumns: `repeat(${matrix[0]?.length || 0}, 60px)` }}>
      {matrix.map((row, i) =>
        row.map((cell, j) => (
          <MatrixInputCell
            i={i}
            j={j}
            cell={cell}
            key={crypto.randomUUID()}
            matrixIndexingMode={matrixIndexingMode}
          />
        ))
      )}
    </div>
  );
};
