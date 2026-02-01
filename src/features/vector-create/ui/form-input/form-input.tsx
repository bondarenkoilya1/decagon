import type { JSX } from "react";
import { useTranslations } from "next-intl";
import type { InputsType, RegisterType } from "src/features";

import { Input, Label, safeParseNumber } from "src/shared";

type FormInputProps = RegisterType & InputsType;

export const FormInput = ({ label, name, register }: FormInputProps): JSX.Element => {
  const t = useTranslations();

  return (
    <div className="grid max-w-sm items-center gap-1" key={crypto.randomUUID()}>
      <Label htmlFor={name}>{t(label as never)}</Label>
      <Input {...register(name, { setValueAs: safeParseNumber })} type="number" id={name} />
    </div>
  );
};
