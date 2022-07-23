import { NextFunction } from "express";
import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    img: string;
    subscribers: number;
    subscribedUsers: [string];
    fromGoogle: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
};

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },
        img: {
            type: String,
        },
        subscribers: {
            type: Number,
            default: 0,
        },
        subscribedUsers: {
            type: [String],
        },
        fromGoogle: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;