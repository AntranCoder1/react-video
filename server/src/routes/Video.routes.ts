import express from "express";
import * as videoController from "../controllers/Video.controllers";
const router = express.Router();

// ADD VIDEO
router.post("/create/:id", videoController.createVideo);

// FIND ALL
router.get("/", videoController.getVideos);

// DELETE VIDEO
router.delete("/:id", videoController.deleteVideo);

// UPDATE VIDEO
router.put("/:id", videoController.updateVideo);

// ADD VIEW
router.put("/view/:id", videoController.addViewVideo);

// RANDOM 
router.get("/random", videoController.addRandomVideo);

// TREND
router.get("/trend", videoController.getTrendVideo);

// SUB
router.get("/sub", videoController.getSubVideo);

// GETBYTAGS
router.get("/tags", videoController.getByTag);

// GET SEARCH
router.get("/search", videoController.search);

export default router;