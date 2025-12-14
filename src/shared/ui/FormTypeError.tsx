import type { JSX } from "react";
import { TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";

export const FormTypeError = (): JSX.Element => {
  const t = useTranslations();

  return (
    <p className="flex">
      <TriangleAlert className="mr-2 text-yellow-500" />
      <span>{t("form.type.error")}</span>
    </p>
  );
};
