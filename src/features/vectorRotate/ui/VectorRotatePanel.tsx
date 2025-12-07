import type { FC, FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { useVectorRotate } from "src/features";

import { Button, ButtonGroup, Input, Typography } from "src/shared";
import { safeParseNumber } from "src/shared/lib/parse";

const degreeOptions = [30, 45, 60, 90];

export const VectorRotatePanel: FC = () => {
  const { register, isButtonDisabled, rotateVector } = useVectorRotate();
  const { t } = useTranslation();

  const rotate = (event: FormEvent): void => {
    event.preventDefault();
    rotateVector();
  };

  return (
    <form onSubmit={rotate}>
      <div className="flex items-center">
        <Typography.H5 className="mr-4">{t("rotate.title")}:</Typography.H5>
        <Input
          {...register("degrees", { setValueAs: safeParseNumber })}
          type="number"
          placeholder="142&deg;"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              rotate(event);
            }
          }}
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
