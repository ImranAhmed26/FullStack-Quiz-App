import express from "express";
import {
  addQuiz,
  getQuiz,
  getQuizes,
  updateQuiz,
  deleteQuiz,
} from "../controllers.js/quizController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router
  .post("/", addQuiz)
  .get("/", getQuizes)
  .get("/:id", getQuiz)
  .put("/:id", updateQuiz)
  .delete("/:id", deleteQuiz);

export default router;
