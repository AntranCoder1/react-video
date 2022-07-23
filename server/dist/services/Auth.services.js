"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resgister = void 0;
const User_models_1 = __importDefault(require("../models/User.models"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const resgister = (data) => {
    const salt = bcryptjs_1.default.genSaltSync(10);
    const hash = bcryptjs_1.default.hashSync(data.password, salt);
    const newUser = new User_models_1.default(Object.assign(Object.assign({}, data), { password: hash }));
    return newUser.save();
};
exports.resgister = resgister;
