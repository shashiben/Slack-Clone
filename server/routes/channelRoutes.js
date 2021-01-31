import express from "express";
import { addChannel } from "../controllers/channelController.js";
const router = express.Router();
router.route("/addChannel").post(addChannel);
export default router;
