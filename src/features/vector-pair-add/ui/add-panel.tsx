"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";
import type { AddOperationType } from "src/shared";

import { Button, ButtonGroup, ButtonGroupSeparator, Typography } from "src/shared";

type AddPanelProps = {
  operation: AddOperationType;
};

export const AddPanel = ({ operation }: AddPanelProps): JSX.Element => {
  const t = useTranslations("vectorPair");
  const formulaFirst = operation === "increase" ? t("formulaAplusB") : t("formulaAminusB");
  const formulaSecond = operation === "increase" ? t("formulaBplusA") : t("formulaBminusA");

  return (
    <div>
      <Typography.H5>{t("addTitle")}</Typography.H5>
      <ButtonGroup className="mt-3 w-full">
        <Button className="w-1/2" variant="outline">
          {formulaFirst}
        </Button>
        <ButtonGroupSeparator />
        <Button className="w-1/2" variant="outline">
          {formulaSecond}
        </Button>
      </ButtonGroup>
    </div>
  );
};
