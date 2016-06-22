module.exports = {
  "env": {
    "browser": true,
  },
  "extends": "eslint:recommended",
  "globals": {
    "$": true,
    "ga": true
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-trailing-spaces": "error",
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-multiple-empty-lines": ["error", {"max": 2}],
    "space-in-parens": ["error", "never"],
    "keyword-spacing": ["error", { "before": true, "after": true}],
    "space-before-blocks": "error",
    "no-lone-blocks": "error"
  },
};
