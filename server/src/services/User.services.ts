import User from "../models/User.models";
import { createError } from "../error";

export const getAll = () => {
    return User.find();
};

export const findUser = (id: String) => {
    return User.findById(id);
};

export const deleteUs = (id: String) => {
    return User.findByIdAndDelete(id);
};

export const updateUs = (id: String, data: any) => {
    return User.findByIdAndUpdate(
        id,
        {
            $set: data
        },
        { new: true }
    )
};