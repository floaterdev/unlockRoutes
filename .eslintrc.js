module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 1,
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 1,
    "react-native/no-raw-text": 1,
    "react-native/no-single-element-style-arrays": 1,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
};
