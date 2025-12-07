import { toast } from "sonner";

import { convertNumberToCapitalLetter } from "src/shared/lib/convert";
import { copyToClipboard } from "src/shared/lib/other";

// UNIT TEST
const formatPart = (part: string): string =>
  part
    .replace(/[{}\[\]"]/g, "") // Remove brackets and quotes
    .replace(/:/g, ": ")
    .replace(/,/g, "\n"); // Place each coordinate in a separate line

// UNIT TEST
export const copyVectorPlacement = (string: string): void => {
  const parts = string.split("},"); // To be able to use .length below
  const formattedString = parts
    .map((part, index) => {
      const vectorName =
        parts.length > 1 ? `Vector #${convertNumberToCapitalLetter(index + 1)}` : `Current Vector`;
      return `${vectorName}\n${formatPart(part)}`;
    })
    .join("\n\n");

  copyToClipboard(formattedString)
    .then((info) => toast(info))
    .catch((error) => {
      toast(error.message || String(error));
      console.error(error);
    });
};
