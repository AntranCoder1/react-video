import { NextFunction, Request, Response } from "express";
import * as authServices from "../services/Auth.services";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.models";
import token from "../utils/jwt.utils";

export const signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const data = {
            name,
            email,
            password
        };

        const register: any = await authServices.resgister(data);

        if (register) {
            res.status(200).send({ status: "success", data: register });
        } else {
            res.status(400).send({ status: "failed" });
        }
    } catch (error: any) {
        res.status(500).send({ 
            status: false, 
            message: error.message 
        });
    }
};

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: any = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found");

        const isCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isCorrect) res.status(404).json("Wrong Credentials");

        const tokens = jwt.sign({ id: user._id }, token.JWT_SECRET);
        const { password, ...others } = user._doc;

        res.cookie("access_token", tokens, {
            httpOnly: true
        }).status(200).json({ ...others, tokens});
    } catch (error: any) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
};