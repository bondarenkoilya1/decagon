import importPlugin from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const IGNORED_FILES = [
  "**/dist/*",
  "**/node_modules/*",
  "**/.vite/*",
  "**/public/*",
  "**/.idea/*",
  "**/.vscode/*",
  "tsconfig.json",
  "jsconfig.json",
  "**/*.min.js",
  "**/*.map.js",
  "**/*.spec.ts",
  "**/.env*"
];

const IMPORT_SORT_GROUPS = [
  ["^react", "^\\w"],
  ["^@"],
  ["^src/app(/.*|$)"],
  ["^src/pages(/.*|$)"],
  ["^src/widgets(/.*|$)"],
  ["^src/features(/.*|$)"],
  ["^src/entities(/.*|$)"],
  ["^src/shared(/.*|$)"],
  [
    "^src/shared/types(/.*|$)",
    "^src/types(/.*|$)",
    "^src/shared/types",
    "^\\.\\./types",
    "^\\./types"
  ],
  ["^.+\\.?(css)$"],
  ["^\\u0000"],
  ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
  ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
];

const RESTRICTED_IMPORTS = {
  patterns: ["@/entities/*/model/store"]
};

const LANGUAGE_OPTIONS = {
  ecmaVersion: "latest",
  sourceType: "module",
  parser: tsParser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    google: "readonly"
  }
};

const PLUGINS = {
  react: eslintPluginReact,
  prettier: eslintPluginPrettier,
  "simple-import-sort": eslintPluginSimpleImportSort,
  import: importPlugin,
  "react-hooks": eslintPluginReactHooks,
  "@typescript-eslint": eslintPluginTs
};

const SETTINGS = {
  react: {
    version: "detect"
  }
};

const RULES = {
  "react/react-in-jsx-scope": "off",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",

  "simple-import-sort/imports": ["error", { groups: IMPORT_SORT_GROUPS }],

  "import/extensions": [
    "error",
    "never",
    {
      ts: "never",
      tsx: "never",
      js: "never",
      jsx: "never",
      json: "always"
    }
  ],

  "prettier/prettier": ["error", { endOfLine: "auto" }],

  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/no-non-null-assertion": "warn",
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true
    }
  ],

  eqeqeq: ["error", "always"],
  "no-console": ["warn", { allow: ["warn", "error"] }],
  "no-debugger": "error",
  "default-case": "warn",
  curly: ["error", "all"],

  "no-restricted-imports": ["error", RESTRICTED_IMPORTS]
};

export default [
  {
    ignores: IGNORED_FILES
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: LANGUAGE_OPTIONS,
    plugins: PLUGINS,
    settings: SETTINGS,
    rules: RULES
  }
];
