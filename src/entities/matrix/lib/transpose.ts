import type { MatrixType } from "src/entities";

export const transpose = (matrix: MatrixType): MatrixType => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const rows = matrix.length;
  const columns = matrix[0].length;
  const transposed: MatrixType = [];

  for (let column = 0; column < columns; column++) {
    const newRow: number[] = [];

    for (let row = 0; row < rows; row++) {
      newRow.push(matrix[row][column]);
    }

    transposed.push(newRow);
  }

  return transposed;
};
