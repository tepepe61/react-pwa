module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  settings: {
    "import/core-modules": [
      "firebase/app",
      "firebase",
      "firebase/auth",
      "firebase/firestore",
      "@material-ui/icons/Delete",
    ],
  },
};
