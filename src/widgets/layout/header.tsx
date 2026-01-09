import type { JSX } from "react";

import { LanguageSelect } from "src/widgets";

import { SidebarTrigger } from "src/shared";

export const Header = (): JSX.Element => {
  return (
    <header className="flex h-16 items-center justify-between gap-2 border-b px-4">
      <SidebarTrigger />
      <LanguageSelect />
    </header>
  );
};
