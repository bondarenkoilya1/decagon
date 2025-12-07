import { type FormEvent, useEffect, useState } from "react";
import type { AddOperationType, MatrixType } from "src/shared";

import { MAX_ROWS_COUNT } from "src/shared";

type UseMatrixFormType = {
  rowsCount: number;
  columnsCount: number;
  matrixSize: MatrixType;
  setRows: (number: number) => void;
  setColumns: (number: number) => void;
  stepRows: (operation: AddOperationType) => void;
  stepColumns: (operation: AddOperationType) => void;
  recreateMatrix: (
    event: FormEvent<HTMLFormElement>,
    rowsCount: number,
    columnsCount: number
  ) => void;
};

export const createEmptyMatrix = (rowsCount: number, columnsCount: number): MatrixType =>
  Array.from({ length: rowsCount }, () => Array(columnsCount).fill(0));

// Math.max returns the number if it's >= 0, otherwise returns 0;
// Math.min returns the number if it's <= MAX_ROWS_COUNT, otherwise returns MAX_ROWS_COUNT
const clamp = (number: number): number => Math.min(Math.max(number, 0), MAX_ROWS_COUNT);

export const useMatrixForm = (): UseMatrixFormType => {
  const [rowsCount, setRowsCount] = useState(3);
  const [columnsCount, setColumnsCount] = useState(3);
  const [matrixSize, setMatrixSize] = useState<MatrixType>(
    createEmptyMatrix(rowsCount, columnsCount)
  );

  useEffect(() => {
    setMatrixSize(createEmptyMatrix(rowsCount, columnsCount));
  }, [rowsCount, columnsCount]);

  const setRows = (number: number): void => setRowsCount(clamp(number));
  const setColumns = (number: number): void => setColumnsCount(clamp(number));

  const stepRows = (operation: AddOperationType): void =>
    setRowsCount((prev) => clamp(prev + (operation === "increase" ? 1 : -1)));

  const stepColumns = (operation: AddOperationType): void =>
    setColumnsCount((prev) => clamp(prev + (operation === "increase" ? 1 : -1)));

  const recreateMatrix = (
    event: FormEvent<HTMLFormElement>,
    rowsCount: number,
    columnsCount: number
  ): void => {
    event.preventDefault();
    setRows(rowsCount);
    setColumns(columnsCount);
  };

  return {
    rowsCount,
    columnsCount,
    matrixSize,
    setRows,
    setColumns,
    stepRows,
    stepColumns,
    recreateMatrix
  };
};
