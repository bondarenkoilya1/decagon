"use client";

import type { FC, FormEvent, KeyboardEvent } from "react";
import { useTranslations } from "next-intl";

import { useVectorRotate } from "src/features";

import { Button, ButtonGroup, Input, Typography } from "src/shared";
import { safeParseNumber } from "src/shared/lib/parse";

const SUGGESTED_DEGREES = [30, 45, 60, 90];

export const VectorRotatePanel: FC = () => {
  const t = useTranslations("rotate");
  const { register, isButtonDisabled, rotateVector } = useVectorRotate();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    rotateVector();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <Typography.H5 className="mr-4">{t("title")}</Typography.H5>
        <Input
          {...register("degrees", { setValueAs: safeParseNumber })}
          type="number"
          placeholder={`${t("placeholder")}°`}
          onKeyDown={handleKeyDown}
          className="w-fit"
        />
      </div>

      <ButtonGroup className="mt-4 w-full">
        {SUGGESTED_DEGREES.map((degrees) => (
          <Button
            variant="outline"
            key={degrees}
            className="w-1/6"
            onClick={() => rotateVector(degrees)}>
            {degrees}°
          </Button>
        ))}
        <Button className="w-2/6" disabled={isButtonDisabled} type="submit">
          {t("button")}
        </Button>
      </ButtonGroup>
    </form>
  );
};
