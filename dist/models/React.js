"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactAppCommand = void 0;
var CreateReactAppCommand = function (nameApp, isTypescript) {
    if (isTypescript === void 0) { isTypescript = false; }
    return "npx create-react-app " + nameApp + " " + (isTypescript ? '--template typescript' : '');
};
exports.CreateReactAppCommand = CreateReactAppCommand;
