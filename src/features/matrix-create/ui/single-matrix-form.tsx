"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import { useMatrixForm } from "src/features";

import { BadgeGroup, MatrixCellGroup, useMatrixIndexingMode } from "src/entities";

import { Panel, Separator, Typography } from "src/shared";

export const SingleMatrixForm: FC = () => {
  const t = useTranslations();
  const matrixIndexingMode = useMatrixIndexingMode();
  const {
    rowsCount,
    columnsCount,
    matrixSize,
    setRows,
    setColumns,
    recreateMatrix,
    stepRows,
    stepColumns
  } = useMatrixForm();

  return (
    <Panel
      className="rounded border border-solid border-gray-300 p-3"
      tag="form"
      onSubmit={(event) => recreateMatrix(event, rowsCount, columnsCount)}>
      <Typography.H5>Create and modify your matrix</Typography.H5>
      <Separator className="mt-2" />

      <BadgeGroup label="Rows" selected={rowsCount} onSelect={setRows} onStep={stepRows} />
      <BadgeGroup
        label="Columns"
        selected={columnsCount}
        onSelect={setColumns}
        onStep={stepColumns}
      />

      <MatrixCellGroup matrix={matrixSize} matrixIndexingMode={matrixIndexingMode} />

      <Separator className="my-3" />
      <Typography.Shy>{t("matrix.form.hint")}</Typography.Shy>
    </Panel>
  );
};
