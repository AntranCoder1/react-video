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
exports.search = exports.getByTag = exports.getSubVideo = exports.getTrendVideo = exports.addRandomVideo = exports.addViewVideo = exports.updateVideo = exports.deleteVideo = exports.getVideos = exports.createVideo = void 0;
const videoServices = __importStar(require("../services/Video.services"));
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        const add = yield videoServices.create(String(id), data);
        if (add) {
            res.status(200).json(add);
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
exports.createVideo = createVideo;
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAll = yield videoServices.findAll();
        if (getAll) {
            res.status(200).json(getAll);
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
exports.getVideos = getVideos;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const remove = yield videoServices.deleteVideo(String(id));
        if (remove) {
            res.status(200).json("Video has been deleted");
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
exports.deleteVideo = deleteVideo;
const updateVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const update = yield videoServices.updateVideo(String(id), data);
        if (update) {
            res.status(200).json(update);
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
exports.updateVideo = updateVideo;
const addViewVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const addView = yield videoServices.addView(String(id));
        if (addView) {
            res.status(200).json("The view has been increased.");
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
exports.addViewVideo = addViewVideo;
const addRandomVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomVideo = yield videoServices.random();
        if (randomVideo) {
            res.status(200).json(randomVideo);
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
exports.addRandomVideo = addRandomVideo;
const getTrendVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTrendVideo = yield videoServices.trend();
        if (getTrendVideo) {
            res.status(200).json(getTrendVideo);
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
exports.getTrendVideo = getTrendVideo;
const getSubVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getSub = yield videoServices.trend();
        if (getSub) {
            res.status(200).json(getSub);
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
exports.getSubVideo = getSubVideo;
const getByTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tag = req.query.tags;
        const getTags = yield videoServices.getByTag(tag);
        if (getTags) {
            res.status(200).json(getTags);
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
exports.getByTag = getByTag;
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.q;
        const getSearch = yield videoServices.getSearch(query);
        if (getSearch) {
            res.status(200).json(getSearch);
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
exports.search = search;
