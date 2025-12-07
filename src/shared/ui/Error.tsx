import type { FC, JSX } from "react";
import Link from "next/link";

import { Typography } from "src/shared";

type ErrorProps = {
  errorCode: number | string;
  errorShortMessage?: string;
  errorFullMessage?: string;
  websiteUrl?: string;
  hasTime?: boolean;
};

export const Error: FC<ErrorProps> = ({
  errorCode,
  errorShortMessage,
  errorFullMessage,
  websiteUrl,
  hasTime
}) => {
  return (
    <section className="rounded-md bg-white max-w-[800px] shadow-xs">
      <header className="p-8 bg-gray-100">
        {errorShortMessage && <p className="text-base my-3">{errorShortMessage}</p>}
        <Typography.H1>Error {errorCode}</Typography.H1>
        {websiteUrl && (
          <Link className="inline-block text-sm mt-1" href="/">
            {websiteUrl}
          </Link>
        )}
        {hasTime && <Timestamp />}
      </header>
      {errorFullMessage && (
        <main className="p-8">
          <h3 className="text-xl font-semibold">What happened?</h3>
          <p className="text-base mt-3">{errorFullMessage}</p>
        </main>
      )}
    </section>
  );
};

function Timestamp(): JSX.Element {
  const timestamp = new Date().toUTCString();

  return <time className="text-sm text-gray-400 mt-3 block">{timestamp}</time>;
}
