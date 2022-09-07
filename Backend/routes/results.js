import express from "express";
import {
  addResult,
  deleteResult,
  getResult,
  getResults,
  updateResult,
} from "../controllers.js/resultController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router
  .post("/", verifyUser, addResult)
  .get("/", verifyAdmin, getResults)
  .get("/:id", verifyUser, getResult)
  .put("/:id", verifyAdmin, updateResult)
  .delete("/:id", verifyAdmin, deleteResult);

export default router;
