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
    <section className="max-w-[800px] rounded-md bg-white shadow-xs">
      <header className="bg-gray-100 p-8">
        {errorShortMessage && <p className="my-3 text-base">{errorShortMessage}</p>}
        <Typography.H1>Error {errorCode}</Typography.H1>
        {websiteUrl && (
          <Link className="mt-1 inline-block text-sm" href="/">
            {websiteUrl}
          </Link>
        )}
        {hasTime && <Timestamp />}
      </header>
      {errorFullMessage && (
        <main className="p-8">
          <h3 className="text-xl font-semibold">What happened?</h3>
          <p className="mt-3 text-base">{errorFullMessage}</p>
        </main>
      )}
    </section>
  );
};

function Timestamp(): JSX.Element {
  const timestamp = new Date().toUTCString();

  return <time className="mt-3 block text-sm text-gray-400">{timestamp}</time>;
}
