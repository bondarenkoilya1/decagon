import type { JSX } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { VectorFormValues } from "src/entities";
import type { InputsType } from "src/features";

import { FormInput } from "./form-input";

type FormInputPairProps = {
  inputPair: InputsType[];
  register: UseFormRegister<VectorFormValues>;
};

export const FormInputPair = ({ inputPair, register }: FormInputPairProps): JSX.Element => {
  return (
    <li className="flex justify-between [&:not(:last-child)]:mb-4" key={crypto.randomUUID()}>
      {inputPair.map(({ name, label }) => (
        <FormInput key={name} label={label} name={name} register={register} />
      ))}
    </li>
  );
};
