import type { MatrixType } from "src/shared";

const fillEmptyFields = (matrix: MatrixType): MatrixType =>
  matrix.map((row) =>
    row.map((element) => (element === undefined || isNaN(element) ? 0 : element))
  );

// todo: specify rows only if string without brackets
// Actually, when you puts just numbers or numbers inside single bracket pair, it's the same.
// So, should i abandon using second and ask to remove brackets if there is only a single pair of them
export const parseToMatrix = (string: string, rowsCount: number): MatrixType => {
  const hasBrackets = string.includes("[") || string.includes("]");

  // const hasNeedlessBracket = string.includes("[");
  // const hasOtherSymbols = string; GIVE ERROR OR WARN
  const matrix: MatrixType = [];

  if (!hasBrackets) {
    const numbers = string
      .trim()
      .split(" ")
      .filter((element) => element !== "")
      .map(Number);

    for (let i = 0; i < numbers.length; i += rowsCount) {
      const row: number[] = [];
      for (let j = i; j < i + rowsCount; j++) {
        row.push(numbers[j]);
      }
      matrix.push(row);
    }
  }

  return fillEmptyFields(matrix);
};
