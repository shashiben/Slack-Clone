import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const authUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log(`AT AUTH USER EXIST`);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      googleId: user.googleId,
    });
  } else {
    console.log(`AT AUTH USER NOT EXIST`);
    const name = req.body.name || "";
    const image = req.body.image || "";
    const email = req.body.email || "";
    const googleId = req.body.googleId || "";
    const newUser = await User.create({ name, email, image, googleId });
    if (newUser) {
      res.json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        image: newUser.image,
        googleId: newUser.googleId,
      });
    } else {
      res.status(500).json({ message: "Error in Creating new user" });
    }
  }
});
export { authUser };
