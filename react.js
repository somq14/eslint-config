module.exports = {
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/self-closing-comp": ["error"],
    "react/prop-types": ["off"],
  },
};
