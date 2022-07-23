import express, { 
    Request, 
    Response, 
    NextFunction,
    Application, 
    ErrorRequestHandler 
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/Auth.routes";
import userRoutes from "./routes/User.routes";
import videoRoutes from "./routes/Video.routes";

dotenv.config({ path: __dirname+'/.env' });

const app = express();

// connect DB
const { connect } = require("./config/db.js");

connect();  

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/video", videoRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message
    })
};

app.use(errorHandler);

const PORT: Number = Number(process.env.PORT) || 5000;
const server: Server = app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
});