"use client";
import type { FC } from "react";
import type { UseFormRegister } from "react-hook-form";
import type {
  AxisType,
  VectorNumberType,
  VectorPairFormValues,
  VectorPositionType
} from "src/entities";

import { useVectorPairForm } from "src/features";

import { Button, Input, Label, Panel, Typography } from "src/shared";
import { convertNumberToCapitalLetter, convertNumberToSub } from "src/shared/lib/convert";

type InputType = {
  name: `${AxisType}${VectorNumberType}${VectorPositionType}`;
  label: string;
};

const createInput = (
  coordinate: AxisType,
  number: VectorNumberType,
  position: VectorPositionType
): InputType => ({
  name: `${coordinate}${number}${position}`,
  label: `${coordinate.toUpperCase()}${convertNumberToSub(number)} ${position.toLowerCase()} coordinate:`
});

const getVectorInputs = (number: VectorNumberType): InputType[][] => [
  [createInput("x", number, "Start"), createInput("x", number, "End")],
  [createInput("y", number, "Start"), createInput("y", number, "End")]
];

type VectorInputsContainerProps = {
  number: VectorNumberType;
  register: UseFormRegister<VectorPairFormValues>;
};

const VectorInputsContainer: FC<VectorInputsContainerProps> = ({ number, register }) => {
  const inputs = getVectorInputs(number);
  const vectorLetter = convertNumberToCapitalLetter(number);

  return (
    <ul className="[&:not(:last-child)]:mt-5">
      <Typography.H5 className="mb-3">
        Vector <Typography.Highlighted>{vectorLetter}</Typography.Highlighted>
      </Typography.H5>
      {inputs.map((inputPair, pairIndex) => (
        <li className="flex justify-between [&:not(:last-child)]:mb-4" key={pairIndex}>
          {inputPair.map(({ name, label }) => (
            <div className="grid max-w-sm items-center gap-1" key={name}>
              <Label htmlFor={name}>{label}</Label>
              <Input {...register(name, { valueAsNumber: true })} type="number" id={name} />
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export const VectorPairForm: FC = () => {
  const { register, onSubmit } = useVectorPairForm();

  return (
    <Panel tag="form" onSubmit={onSubmit}>
      <div>
        {([1, 2] as const).map((number) => (
          <VectorInputsContainer key={crypto.randomUUID()} number={number} register={register} />
        ))}
      </div>
      <Button type="submit" className="mt-4 w-full">
        Create vectors
      </Button>
      <Typography.Shy className="mt-2.5">
        You can create only a single vector at one time. Feel free to modify it
      </Typography.Shy>
    </Panel>
  );
};
