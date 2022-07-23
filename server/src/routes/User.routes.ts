import express from "express";
import * as userController from "../controllers/User.controllers";
const router = express.Router();

// GET USERS
router.get("/", userController.getAllUser);

// GET USER ID
router.get("/:id", userController.getUserId);

// DELETE USER
router.delete("/:id", userController.deleteUser);

//UPDATE USER
router.put("/:id", userController.updateUser);

export default router;