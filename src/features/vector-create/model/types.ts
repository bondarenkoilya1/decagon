import type { UseFormRegister } from "react-hook-form";
import type { VectorFormValues } from "src/entities";

export type RegisterType = {
  register: UseFormRegister<VectorFormValues>;
};

export type InputsType = {
  name: "xStart" | "xEnd" | "yStart" | "yEnd";
  label: string;
};
