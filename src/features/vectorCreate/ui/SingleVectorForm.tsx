import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { useVectorForm } from "src/features/vectorCreate/model/useVectorForm";

import { Button, Input, Label, Panel, Typography } from "src/shared";
import { safeParseNumber } from "src/shared/lib/parse";

type InputsType = {
  name: "xStart" | "xEnd" | "yStart" | "yEnd";
  label: string;
};

export const SingleVectorForm: FC = () => {
  const { register, onSubmit } = useVectorForm();
  const { t } = useTranslation();

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

  return (
    <Panel
      className="border-gray-300 p-3 border border-solid rounded"
      tag="form"
      onSubmit={onSubmit}>
      <ul>
        {inputs.map((inputPair) => (
          <li className="flex justify-between [&:not(:last-child)]:mb-4" key={crypto.randomUUID()}>
            {inputPair.map(({ name, label }) => (
              <div className="grid max-w-sm items-center gap-1" key={crypto.randomUUID()}>
                <Label htmlFor={name}>{t(label)}</Label>
                <Input
                  {...register(name, { setValueAs: safeParseNumber })}
                  type="number"
                  id={name}
                />
              </div>
            ))}
          </li>
        ))}
      </ul>
      <Button type="submit" className="w-full mt-4">
        {t("singleForm.submit")}
      </Button>
      <Typography.Shy className="mt-2.5">{t("singleForm.hint")}</Typography.Shy>
    </Panel>
  );
};
