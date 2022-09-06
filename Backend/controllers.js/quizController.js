import Quiz from "../models/Quiz.js";

const addQuiz = async (req, res) => {
  const newQuiz = new Quiz(req.body);
  try {
    const savedQuiz = await newQuiz.save();
    res.status(200).json(savedQuiz);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getQuiz = async (req, res) => {
  try {
    const getSingleQuiz = await Quiz.findById(req.params.id);
    res.status(200).json(getSingleQuiz);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getQuizes = async (req, res) => {
  try {
    const getAllQuiz = await Quiz.find();
    res.status(200).json(getAllQuiz);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateQuiz = async (req, res) => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.status(200).json("Quiz Deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export { addQuiz, getQuiz, getQuizes, updateQuiz, deleteQuiz };
