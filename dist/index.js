"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Interface_1 = __importDefault(require("./models/Interface"));
// future references
// import fs from 'fs'
// fs.writeFile('index.js', 'console.log(\'index!!\')', {}, () => {})
var inter = new Interface_1.default();
inter.firstQuest();
