"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorCommands = void 0;
var handleErrorCommands = function (error, stdout, stderr) {
    if (error) {
        console.log(error);
        return;
    }
    if (stdout) {
        console.log(stdout);
        return;
    }
    console.log(stderr);
};
exports.handleErrorCommands = handleErrorCommands;
