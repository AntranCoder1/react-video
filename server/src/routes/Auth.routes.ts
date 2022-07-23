import express from "express";
import * as authController from "../controllers/Auth.controllers";
const router = express.Router();

// REGISTER
router.post("/signup", authController.signup);

//LOGIN
router.post("/signin", authController.signin);

export default router;