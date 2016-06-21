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
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-trailing-spaces": 2,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
    "no-multiple-empty-lines": ["error", {"max": 2}]
    "no-lone-blocks": "error"
  },
};
