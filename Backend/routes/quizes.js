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
  .post("/", verifyAdmin, addQuiz)
  .get("/", verifyUser, getQuizes)
  .get("/:id", verifyUser, getQuiz)
  .put("/:id", verifyAdmin, updateQuiz)
  .delete("/:id", verifyAdmin, deleteQuiz);

export default router;
