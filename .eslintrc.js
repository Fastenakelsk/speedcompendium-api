module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 0,
    'no-return-await': 0,
    'comma-dangle': 0,
    'max-len': 0,
  },
};
