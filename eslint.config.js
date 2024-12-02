import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    env: { browser: true, es2020: true, node: true },
    extends: [
      js.configs.recommended,
      ...typescript.configs.recommended,
      "airbnb",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/typescript",
      "plugin:prettier/recommended",

    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
      "prettier": tseslint.configs.recommended.plugins.prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "react/jsx-filename-extension": [1,{"extensions": [".tsx"]}],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "prettier/prettier": [
        "error",
        {
          "semi": true,
          "tabWidth": 2,
          "useTabs": false
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  }
);
