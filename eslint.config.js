import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],

    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier
    ],

    rules: {
      // ordenar imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // apagar regla original
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // borrar imports no usados
      "unused-imports/no-unused-imports": "error",

      // marcar variables no usadas (pero permitir prefijo _)
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ]
    },

    languageOptions: {
      globals: globals.browser
    }
  }
]);