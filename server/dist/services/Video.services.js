"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearch = exports.getByTag = exports.trend = exports.random = exports.addView = exports.updateVideo = exports.deleteVideo = exports.findAll = exports.create = void 0;
const Video_models_1 = __importDefault(require("../models/Video.models"));
const error_1 = require("../error");
const create = (id, data) => {
    const newVideo = new Video_models_1.default(Object.assign({ userId: id }, data));
    const saveVideo = newVideo.save();
    return saveVideo;
};
exports.create = create;
const findAll = () => {
    return Video_models_1.default.find();
};
exports.findAll = findAll;
const deleteVideo = (id) => {
    return Video_models_1.default.findByIdAndDelete(id);
};
exports.deleteVideo = deleteVideo;
const updateVideo = (id, data) => {
    const videoId = Video_models_1.default.findById(id);
    if (!videoId) {
        return (0, error_1.createError)(404, "Video not found!");
    }
    else {
        const update = Video_models_1.default.findByIdAndUpdate(id, {
            $set: data
        }, { new: true });
        return update;
    }
};
exports.updateVideo = updateVideo;
const addView = (id) => {
    return Video_models_1.default.findByIdAndUpdate(id, {
        $inc: { views: 1 },
    });
};
exports.addView = addView;
const random = () => {
    return Video_models_1.default.aggregate([{ $sample: { size: 40 } }]);
};
exports.random = random;
const trend = () => {
    return Video_models_1.default.find().sort({ views: -1 });
};
exports.trend = trend;
const getByTag = (tag) => {
    return Video_models_1.default.find({ tag: { $in: tag } }).limit(20);
};
exports.getByTag = getByTag;
const getSearch = (query) => {
    return Video_models_1.default.find({
        title: { $regex: query, $options: "i" },
    }).limit(40);
};
exports.getSearch = getSearch;
