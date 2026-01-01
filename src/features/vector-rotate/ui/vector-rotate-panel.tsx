"use client";
import type { FC, FormEvent } from "react";
import React from "react";
import { useTranslations } from "next-intl";

import { useVectorRotate } from "src/features";

import { Button, ButtonGroup, Input, Typography } from "src/shared";
import { safeParseNumber } from "src/shared/lib/parse";

const degreeOptions = [30, 45, 60, 90];

export const VectorRotatePanel: FC = () => {
  const { register, isButtonDisabled, rotateVector } = useVectorRotate();
  const t = useTranslations();

  const handleRotate = (event: FormEvent): void => {
    event.preventDefault();
    rotateVector();
  };

  const handleRotateOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleRotate(event);
    }
  };

  return (
    <form onSubmit={handleRotate}>
      <div className="flex items-center">
        <Typography.H5 className="mr-4">{t("rotate.title")}:</Typography.H5>
        <Input
          {...register("degrees", { setValueAs: safeParseNumber })}
          type="number"
          placeholder="142&deg;"
          onKeyDown={handleRotateOnKeyDown}
          className="w-fit"
        />
      </div>

      <ButtonGroup className="mt-4 w-full">
        {degreeOptions.map((option) => (
          // todo: add functionality
          <Button variant="outline" key={crypto.randomUUID()} className="w-1/6" disabled>
            {option}&deg;
          </Button>
        ))}
        <Button className="w-2/6" disabled={isButtonDisabled} type="submit">
          {t("rotate")}
        </Button>
      </ButtonGroup>
    </form>
  );
};
