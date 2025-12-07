export const safeParseNumber = (value: unknown): number => {
  if (value === "" || value === null || value === undefined) {
    return 0;
  }

  if (typeof value === "number") {
    return isFinite(value) ? value : 0;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "") {
      return 0;
    }

    const parsed = Number(trimmed);
    return isFinite(parsed) ? parsed : 0;
  }

  const numberValue = Number(value);
  return isFinite(numberValue) ? numberValue : 0;
};
