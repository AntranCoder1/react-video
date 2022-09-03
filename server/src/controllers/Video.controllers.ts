import { NextFunction, Request, Response } from "express";
import { StringExpressionOperator } from "mongoose";
import * as videoServices from "../services/Video.services";

export const createVideo = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const id: String = req.params.id;
        const add: any = await videoServices.create(String(id) ,data);

        if (add) {
            res.status(200).json(add);
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

export const getVideos = async (req: Request, res: Response) => {
    try {
        const getAll = await videoServices.findAll();

        if (getAll) {
            res.status(200).json(getAll);
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

export const deleteVideo = async (req: Request, res: Response) => {
    try {
        const id: String = req.params.id;
        const remove: any = await videoServices.deleteVideo(String(id));

        if (remove) {
            res.status(200).json("Video has been deleted");
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

export const updateVideo = async (req: Request, res: Response) => {
    try {
        const id: String = req.params.id;
        const data = req.body;

        const update: any = await videoServices.updateVideo(String(id), data);

        if (update) {
            res.status(200).json(update);
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

export const addViewVideo = async (req: Request, res: Response) => {
    try {
        const id: String = req.params.id;
        const addView: any = await videoServices.addView(String(id));

        if (addView) {
            res.status(200).json("The view has been increased.");
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

export const addRandomVideo = async (req: Request, res: Response) => {
    try {
        const randomVideo = await videoServices.random();
        
        if (randomVideo) {
            res.status(200).json(randomVideo);
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

export const getTrendVideo = async (req: Request, res: Response) => {
    try {
        const getTrendVideo = await videoServices.trend();

        if (getTrendVideo) {
            res.status(200).json(getTrendVideo);
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

export const getSubVideo = async (req: Request, res: Response) => {
    try {
        const getSub = await videoServices.trend();

        if (getSub) {
            res.status(200).json(getSub);
        } else {
            res.status(400).send({ status: "failed" })
        }
    } catch (error: any) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
};

export const getByTag = async (req: Request, res: Response) => {
    try {
        const tag = req.query.tags;
        const getTags = await videoServices.getByTag(tag);

        if (getTags) {
            res.status(200).json(getTags);
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

export const search = async (req: Request, res: Response) => {
    try {
        const query = req.query.q;
        const getSearch = await videoServices.getSearch(query);

        if (getSearch) {
            res.status(200).json(getSearch);
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

