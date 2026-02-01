import type { useTranslations } from "next-intl";

export type TranslationKey = Parameters<ReturnType<typeof useTranslations<never>>>[0];

export type NavigationItemProps = {
  title: TranslationKey;
  url: string;
};

export type NavigationSectionProps = {
  title: TranslationKey;
  items: NavigationItemProps[];
};
