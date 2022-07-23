"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUs = exports.deleteUs = exports.findUser = exports.getAll = void 0;
const User_models_1 = __importDefault(require("../models/User.models"));
const getAll = () => {
    return User_models_1.default.find();
};
exports.getAll = getAll;
const findUser = (id) => {
    return User_models_1.default.findById(id);
};
exports.findUser = findUser;
const deleteUs = (id) => {
    return User_models_1.default.findByIdAndDelete(id);
};
exports.deleteUs = deleteUs;
const updateUs = (id, data) => {
    return User_models_1.default.findByIdAndUpdate(id, {
        $set: data
    }, { new: true });
};
exports.updateUs = updateUs;
