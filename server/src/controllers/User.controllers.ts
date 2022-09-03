import { NextFunction, Request, Response } from "express";
import User from "../models/User.models";
import Video from "../models/Video.models";
import * as userServices from "../services/User.services";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const getUsers = await userServices.getAll();

        if (getUsers) {
            res.status(200).send({ status: "success", data: getUsers });
        } else {
            res.status(400).send({ status: "failed" });
        }
    } catch (error: any) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
};

export const getUserId = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const getUser = await userServices.findUser(String(id));

        if (getUser) {
            res.status(200).send({ status: "success", data: getUser });
        } else {
            res.status(400).send({ status: "failed" });
        }
    } catch (error: any) {
        res.status(500).send({
            status: false,
            message: error.message,
        })
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id: String = req.params.id;
        const removeUs = await userServices.deleteUs(String(id));

        if (removeUs) {
            res.status(200).json("User has been deleted.");
        } else {
            res.status(400).json("You can delete only your account.");
        }
    } catch (error: any) {
        res.status(500).send({
            status: false,
            message: error.message,
        })
    }
};

export const updateUser = async (req: Request, res: Response) =>{
    try {
        const id: String = req.params.id;
        const data = req.body;
        const update = await userServices.updateUs(String(id), data);

        if (update) {
            res.status(200).send({ status: "success", data: update });
        } else {
            res.status(400).send({ status: "failed" });
        }
    } catch (error: any) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
};

export const subscribe = async (req: Request, res: Response) => {
    try {
        const userId = req.body.user.id;
        await User.findByIdAndUpdate(userId, {
            $push: {
                subscribedUsers: req.params.id
            }
        });
        res.status(200).json("Subscription successful.");
    } catch (error: any) {
        res.status(500).send({ status: false, message: error.message })
    }
};

export const unsubscribe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.body.user.id;
        try {
            await User.findByIdAndUpdate(userId, {
                $pull: { subscribedUsers: req.params.id },
            });
            await User.findByIdAndUpdate(req.params.id, {
                $inc: { subscribers: -1 }
            })
        } catch (error) {
            next(error);
        }
    } catch (error: any) {
        res.status(500).send({ status: false, message: error.message })
    }
};

export const like = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.body.user.id;
        const videoId = req.params.videoId;

        try {
            await Video.findByIdAndUpdate(videoId, {
                $addToSet: { likes: userId },
                $pull: { dislikes: userId }
            })
        } catch (error) {
            next(error);
        }
        res.status(200).json("The video has been liked.");
    } catch (error: any) {
        res.status(500).send({ status: false, message: error.message });
    }
};

export const disLike = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.body.user.id;
        const videId = req.params.videoId;

        try {
            await Video.findByIdAndUpdate(videId, {
                $addToSet: { dislikes: userId },
                $push: { likes: userId },
            })
            res.status(200).json("The video has been disliked.");
        } catch (error) {
            next(error);
        }
    } catch (error: any) {
        res.status(500).send({ status: false, message: error.message });
    }
};