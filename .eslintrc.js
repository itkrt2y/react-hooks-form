module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  rules: {
    "no-unused-vars": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};