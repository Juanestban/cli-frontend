"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintStaged = exports.eslintignore = exports.eslint = exports.prettierignore = exports.prettier = exports.installCleanners = void 0;
var packageCleaners = [
    'eslint-config-standard',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-testing-library',
];
exports.installCleanners = "npm i eslint eslint-config-prettier prettier " + packageCleaners.join(' ');
var ignore = ".next\nnode_modules\n.eslintcache\n.vscode\ncoverage\nbabel-config.js\npackage.json\n.eslintcache\n";
exports.prettier = "echo '{\n  \"semi\": false,\n  \"singleQuote\": true,\n  \"tabWidth\": 2,\n}' > .prettierrc";
exports.prettierignore = "echo \"" + ignore + "\" > .prettierignore";
exports.eslint = "echo \"module.exports = {\n  env: {\n    browser: true,\n    es2021: true,\n    node: true,\n    'jest/globals': true,\n  },\n  extends: ['plugin:react/recommended', 'standard', 'prettier'],\n  parserOptions: {\n    ecmaFeatures: {\n      jsx: true,\n    },\n    ecmaVersion: 12,\n    sourceType: 'module',\n  },\n  plugins: ['react', 'testing-library', 'jest'],\n  rules: {\n    'react/react-in-jsx-scope': 0,\n    camelcase: 0,\n    // 'no-debugger': 0,\n    'dot-notation': 0,\n  },\n}\" > .eslintrc.js";
exports.eslintignore = "echo \"" + ignore + "\" > .eslintignore";
exports.lintStaged = 'npx mrm@2 lint-staged';
var cleanners = [
    exports.installCleanners,
    exports.prettier,
    exports.prettierignore,
    exports.eslint,
    exports.eslintignore,
    exports.lintStaged,
];
exports.default = cleanners;
