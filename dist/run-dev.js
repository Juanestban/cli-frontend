"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
// import fs from 'fs';
// import path from 'path';
// import { exec } from 'child_process';
// const realCurrentPath = path.join(__dirname, '/../dist/index.js');
// function execCommand(command: string) {
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     if (stdout) {
//       console.log(stdout);
//       return;
//     }
//     console.log(stderr);
//     console.log('error to exec node ./dist/index.js');
//   });
// }
// const conditional = fs.existsSync(realCurrentPath);
// console.info("[+] - the path of package 'clifrontend':", realCurrentPath);
// if (conditional) {
//   console.info("[+] - exist the path dist/index.js from package 'clifrontend'");
//   const newPath = path.join(__dirname, '/../dist');
// }
index_1.default.run();
