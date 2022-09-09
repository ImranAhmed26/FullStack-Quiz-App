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
  .post("/", addResult)
  .get("/", getResults)
  .get("/:id", getResult)
  .put("/:id", updateResult)
  .delete("/:id", deleteResult);

export default router;
