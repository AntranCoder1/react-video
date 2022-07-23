"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserId = exports.getAllUser = void 0;
const userServices = __importStar(require("../services/User.services"));
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUsers = yield userServices.getAll();
        if (getUsers) {
            res.status(200).send({ status: "success", data: getUsers });
        }
        else {
            res.status(400).send({ status: "failed" });
        }
    }
    catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        });
    }
});
exports.getAllUser = getAllUser;
const getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const getUser = yield userServices.findUser(String(id));
        if (getUser) {
            res.status(200).send({ status: "success", data: getUser });
        }
        else {
            res.status(400).send({ status: "failed" });
        }
    }
    catch (error) {
        res.status(500).send({
            status: false,
            message: error.message,
        });
    }
});
exports.getUserId = getUserId;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const removeUs = yield userServices.deleteUs(String(id));
        if (removeUs) {
            res.status(200).json("User has been deleted.");
        }
        else {
            res.status(400).json("You can delete only your account.");
        }
    }
    catch (error) {
        res.status(500).send({
            status: false,
            message: error.message,
        });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const update = yield userServices.updateUs(String(id), data);
        if (update) {
            res.status(200).send({ status: "success", data: update });
        }
        else {
            res.status(400).send({ status: "failed" });
        }
    }
    catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        });
    }
});
exports.updateUser = updateUser;
