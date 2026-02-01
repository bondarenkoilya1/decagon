const DEFAULT_SUCCESS_MESSAGE = "Text was successfully copied";

export const copyToClipboard = (
  text: string,
  successMessage: string = DEFAULT_SUCCESS_MESSAGE
): Promise<string> =>
  navigator.clipboard
    .writeText(text)
    .then(() => successMessage)
    .catch((error) => Promise.reject(error));
