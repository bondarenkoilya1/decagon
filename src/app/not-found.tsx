"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";

import { Container, Typography } from "src/shared";

const NotFoundPage = (): JSX.Element => {
  const t = useTranslations("notFound");

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center">
      <Typography.H1 className="mb-2">{t("title")}</Typography.H1>
      <Typography.P className="text-muted-foreground">{t("description")}</Typography.P>
    </Container>
  );
};

export default NotFoundPage;
