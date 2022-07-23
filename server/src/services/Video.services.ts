import Video from "../models/Video.models";
import { createError } from "../error";

export const create = (id: String, data: any) => {
    const newVideo = new Video({ userId: id, ...data });
    const saveVideo = newVideo.save();
    return saveVideo;
};

export const findAll = () => {
    return Video.find();
};

export const deleteVideo = (id: String) => {
    return Video.findByIdAndDelete(id);
};

export const updateVideo = (id: String, data: any) => {
    const videoId = Video.findById(id);
    if (!videoId) {
        return createError(404, "Video not found!");
    } else {
        const update = Video.findByIdAndUpdate(
            id,
            {
                $set: data
            },
            { new: true }
        );
        return update;
    }  
};

export const addView = (id: String) => {
    return Video.findByIdAndUpdate(
        id,
        {
            $inc: { views: 1 },
        }
    );
};

export const random = () => {
    return Video.aggregate([{ $sample: { size: 40 } }]);
};

export const trend = () => {
    return Video.find().sort({ views: -1 });
};

export const getByTag = (tag: any) => {
    return Video.find({ tag: { $in: tag } }).limit(20);
};

export const getSearch = (query: any) => {
    return Video.find({
        title: { $regex: query, $options: "i" },
    }).limit(40);
};