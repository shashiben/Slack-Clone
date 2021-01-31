import express from "express";
import {
  addChannel,
  getAllChannels,
} from "../controllers/channelController.js";
const router = express.Router();
router.route("/addChannel").post(addChannel);
router.route("/").get(getAllChannels);
export default router;
