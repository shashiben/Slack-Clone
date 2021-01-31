import asyncHandler from "express-async-handler";
import Channel from "../models/channel.js";

const addChannel = asyncHandler(async (req, res) => {
  const { name, details, createdBy, username, image } = req.body;
  console.log(req.body);
  const newChannel = await Channel.create({
    name,
    details,
    createdBy,
    username,
    image,
  });
  if (newChannel) {
    res.json({
      name: newChannel.name,
      details: newChannel.details,
      createdBy: newChannel.createdBy,
      username: newChannel.username,
      image: newChannel.image,
    });
  }
});
export { addChannel };
