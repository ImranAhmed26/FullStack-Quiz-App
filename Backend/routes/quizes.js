import express from "express";
import {
  getQuizes,
  getQuiz,
  addQuiz,
  deleteQuiz,
  updateQuiz,
} from "../controllers.js/quizController.js";

const router = express.Router();

router
  .get("/", getQuizes)
  .get("/:id", getQuiz)
  .post("/", addQuiz)
  .put("/:id", updateQuiz)
  .delete("/:id", deleteQuiz);

// router.get("./", (req, res) => {
//   res.send("Quizes Route");
// });

export default router;
