import type { FC } from "react";
import type { FormType, JSXElement } from "src/shared";

import { SingleMatrixForm } from "src/features";

import { FormTypeError } from "src/shared";

export const MatrixCreateForm: FC<{ type: FormType }> = ({ type }): JSXElement => {
  switch (type) {
    case "single":
      return <SingleMatrixForm />;
    default:
      return <FormTypeError />;
  }
};
