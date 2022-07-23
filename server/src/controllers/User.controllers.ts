import { NextFunction, Request, Response } from "express";
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