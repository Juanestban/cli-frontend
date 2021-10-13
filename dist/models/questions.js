"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
var TypesTateSession_1 = require("../interfaces/TypesTateSession");
exports.questions = [
    {
        type: 'input',
        name: TypesTateSession_1.TypesStateSession.nameApplication,
        message: 'What is the name of the project?',
        default: 'myapp',
    },
    {
        type: 'list',
        name: TypesTateSession_1.TypesStateSession.nextOrReact,
        message: 'what are the library/framework that you will use?',
        choices: ['React', 'Next'],
    },
    {
        type: 'confirm',
        name: TypesTateSession_1.TypesStateSession.ifImplementTs,
        message: 'are you wish implement typescript?',
        default: false,
    },
    {
        type: 'confirm',
        name: TypesTateSession_1.TypesStateSession.cleanners,
        message: 'are you install eslint, prettier and lintstaged? (only function with javascript)',
        default: true,
    },
    {
        type: 'list',
        name: TypesTateSession_1.TypesStateSession.typeOf_OS,
        message: 'what are you system operative?',
        choices: ['Windows', 'Mac', 'Linux'],
    },
];
