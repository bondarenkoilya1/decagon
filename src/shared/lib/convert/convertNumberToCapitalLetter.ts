const LATIN_CAPITAL_ALPHABET_START = 64;

export const convertNumberToCapitalLetter = (number: number): string =>
  String.fromCharCode(number + LATIN_CAPITAL_ALPHABET_START);
