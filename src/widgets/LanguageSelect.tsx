import type { FC } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import type { LanguagesType } from "src/shared";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "src/shared";

export const LanguageSelect: FC = () => {
  const { i18n, t } = useTranslation();

  const switchLanguage = (value: LanguagesType): Promise<TFunction<"translation", undefined>> =>
    i18n.changeLanguage(value);

  return (
    <Select
      defaultValue={localStorage.getItem("language") || "russian"}
      onValueChange={switchLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("main_languages")}</SelectLabel>
          <SelectItem value="english">{t("language_english")}</SelectItem>
          <SelectItem value="russian">{t("language_russian")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
