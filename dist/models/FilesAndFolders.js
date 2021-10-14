"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdCreateFolders = void 0;
var folders = [
    'components/{Atoms,Molecules,Organisms}',
    'contexts',
    'config',
    'hooks',
];
exports.cmdCreateFolders = folders.map(function (folder) { return "mkdir -p " + folder; });
