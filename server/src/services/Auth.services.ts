import User from "../models/User.models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const resgister = (data: any) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    const newUser = new User({ ...data, password: hash });

    return newUser.save();
};