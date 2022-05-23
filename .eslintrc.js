module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'jsx-a11y/aria-role': 0,
    'no-undef': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    'no-useless-return': 0,
    'no-extend-native': 0,
    'no-new': 0,
    camelcase: 0,
    yoda: 0,
  },
};
