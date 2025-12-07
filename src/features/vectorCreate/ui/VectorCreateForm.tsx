import type { FC } from "react";
import type { FormType } from "src/shared";

import { SingleVectorForm, VectorPairForm } from "src/features";

import { FormTypeError } from "src/shared";

export const VectorCreateForm: FC<{ type: FormType }> = ({ type }) => {
  switch (type) {
    case "single":
      return <SingleVectorForm />;
    case "pair":
      return <VectorPairForm />;
    default:
      return <FormTypeError />;
  }
};
