const packageCleaners = [
  'eslint-config-standard',
  'eslint-plugin-import',
  'eslint-plugin-jest',
  'eslint-plugin-node',
  'eslint-plugin-promise',
  'eslint-plugin-react',
  'eslint-plugin-testing-library',
];

export const installCleanners = (isReact: boolean): string =>
  `npm i ${
    isReact ? 'eslint' : ''
  } eslint-config-prettier prettier ${packageCleaners.join(' ')}`;

const ignore = `.next
node_modules
.eslintcache
.vscode
coverage
babel-config.js
package.json
.eslintcache
`;

export const prettier = `echo '{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
}' > .prettierrc`;

export const prettierignore = `echo "${ignore}" > .prettierignore`;

export const eslint = `echo "module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'testing-library', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 0,
    camelcase: 0,
    // 'no-debugger': 0,
    'dot-notation': 0,
  },
}" > .eslintrc.js`;

export const eslintignore = `echo "${ignore}" > .eslintignore`;

export const lintStaged = 'npx mrm@2 lint-staged';

const cleanners = (isReact: boolean): string[] => [
  installCleanners(isReact),
  prettier,
  prettierignore,
  eslint,
  eslintignore,
  lintStaged,
];

export default cleanners;
