import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoDBConfig.js";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";

dotenv.config();

connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//*DEFINE ALL ROUTES HERE
app.use("/user", userRoutes);
app.use("/channels", channelRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
