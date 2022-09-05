import express from "express";

const router = express.Router();

router.get("./", (req, res) => {
  res.send("Quizes Route");
});

export default router