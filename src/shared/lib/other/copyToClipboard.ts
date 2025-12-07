export const copyToClipboard = (text: string): Promise<string> =>
  navigator.clipboard
    .writeText(text)
    .then(() => "Text was successfully copied")
    .catch((error) => error);
