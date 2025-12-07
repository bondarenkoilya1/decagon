import { useTranslation } from "react-i18next";
import { TriangleAlert } from "lucide-react";
import type { JSXElement } from "src/shared";

export const FormTypeError = (): JSXElement => {
  const { t } = useTranslation();

  return (
    <p className="flex">
      <TriangleAlert className="mr-2 text-yellow-500" />
      <span>{t("form.type.error")}</span>
    </p>
  );
};
