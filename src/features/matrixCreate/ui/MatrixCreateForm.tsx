import type { FC, JSX } from "react";
import type { FormType } from "src/shared";

import { SingleMatrixForm } from "src/features";

import { FormTypeError } from "src/shared";

export const MatrixCreateForm: FC<{ type: FormType }> = ({ type }): JSX.Element => {
  switch (type) {
    case "single":
      return <SingleMatrixForm />;
    default:
      return <FormTypeError />;
  }
};
