"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNextAppCommand = void 0;
var CreateNextAppCommand = function (nameApp, isTypescript) {
    if (isTypescript === void 0) { isTypescript = false; }
    return "npx create-next-app " + nameApp + " " + (isTypescript ? '--ts' : '');
};
exports.CreateNextAppCommand = CreateNextAppCommand;
