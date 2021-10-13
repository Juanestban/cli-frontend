"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTypeOS = void 0;
var SystemOperatives_1 = require("../interfaces/SystemOperatives");
var handleTypeOS = function (so) {
    var _a;
    var _b;
    var conditionals = (_a = {},
        _a[SystemOperatives_1.systemOperativeEnum.Windows] = ' ; ',
        _a[SystemOperatives_1.systemOperativeEnum.Mac] = ' && ',
        _a[SystemOperatives_1.systemOperativeEnum.Linux] = ' && ',
        _a.default = 'error in digit system operative',
        _a);
    return (_b = conditionals[so]) !== null && _b !== void 0 ? _b : conditionals.default;
};
exports.handleTypeOS = handleTypeOS;
