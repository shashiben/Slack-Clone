import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
    },
    timeStamp: {
      type: Date,
      default: Date.now,
    },
    message: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model("Message", messageSchema);

export default Message;
