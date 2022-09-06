import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers.js/userController.js";

const router = express.Router();

router

  .get("/", verifyAdmin, getUsers)
  .get("/:id", verifyUser, getUser)
  .post("/:id", verifyUser, updateUser)
  .delete("/:id", verifyUser, deleteUser);

export default router;
