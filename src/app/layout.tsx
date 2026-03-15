import type { ReactNode } from "react";

import { Toaster } from "src/shared";

import "../globals.css";

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props): ReactNode {
  return (
    <html lang="ru">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
