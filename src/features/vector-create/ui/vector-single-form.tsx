"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";
import type { InputsType } from "src/features";

import { useVectorForm } from "src/features";
import { FormInputPair } from "src/features/vector-create/ui/form-input";

import { Button, Panel, Typography } from "src/shared";

const inputs: InputsType[][] = [
  [
    { name: "xStart", label: "singleForm.xStart" },
    { name: "xEnd", label: "singleForm.xEnd" }
  ],
  [
    { name: "yStart", label: "singleForm.yStart" },
    { name: "yEnd", label: "singleForm.yEnd" }
  ]
];

export const VectorSingleForm = (): JSX.Element => {
  const { register, onSubmit } = useVectorForm();
  const t = useTranslations();

  return (
    <Panel
      className="border-gray-300 p-3 border border-solid rounded"
      tag="form"
      onSubmit={onSubmit}>
      <ul>
        {inputs.map((inputPair) => (
          <FormInputPair key={crypto.randomUUID()} inputPair={inputPair} register={register} />
        ))}
      </ul>
      <Button type="submit" className="w-full mt-4">
        {t("singleForm.submit")}
      </Button>
      <Typography.Shy className="mt-2.5">{t("singleForm.hint")}</Typography.Shy>
    </Panel>
  );
};
