"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageNecessary = exports.createNpmRc = void 0;
exports.createNpmRc = 'echo "save-exact=true" > .npmrc';
exports.packageNecessary = 'npm i prop-types react-icons styled-components framer-motion react-router-dom react-helmet react-helmet-async classnames';
var packageNecessaryDefault = [exports.createNpmRc, exports.packageNecessary];
exports.default = packageNecessaryDefault;
