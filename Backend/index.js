import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import quizesRoute from "./routes/quizes.js";
import resultsRoute from "./routes/results.js";

// app config
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

// Mongo DB Connection
const connect = () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("connected to DB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/quizes", quizesRoute);
app.use("/api/results", resultsRoute);
app.get("/", (req, res) => res.status(200).send("Server is Live"));

// middleware for error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong !!";
  return res
    .status(errorStatus)
    .json({ success: false, status: errorStatus, message: errorMessage, stack: err.stack });
});

// Listen
app.listen(port, () => {
  connect();
  console.log("connected to server");
});
