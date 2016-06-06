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
      2,
      2
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "no-trailing-spaces": 2,
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ]
    "no-multiple-empty-lines": [
      "error", {"max": 2}
    ]
    "no-lone-blocks": [
      "error"
    ]
  },
};
