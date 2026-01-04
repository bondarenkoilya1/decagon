"use client";
import type { FC } from "react";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

import { useMatrixIndexingModeToggle } from "src/features";

import { useMatrixIndexingMode } from "src/entities";

import { Label, Switch } from "src/shared";

export const MatrixIndexingModeToggle: FC = () => {
  const t = useTranslations();
  const mode = useMatrixIndexingMode();
  const { toggleMode } = useMatrixIndexingModeToggle();

  return (
    <div className="flex items-center gap-2">
      <Switch id="matrix-indexing-mode" checked={mode === "zero"} onCheckedChange={toggleMode} />
      <Label htmlFor="matrix-indexing-mode" className="cursor-pointer">
        {t("matrix.indexing")}
      </Label>
      <span className="inline-flex items-center cursor-help" title={t("matrix.indexing.tooltip")}>
        <Info className="w-4 h-4 opacity-30" />
      </span>
    </div>
  );
};
