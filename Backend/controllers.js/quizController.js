import Quiz from "../models/Quiz.js";

const addQuiz = async (req, res, next) => {
  const newQuiz = new Quiz(req.body);
  try {
    const savedQuiz = await newQuiz.save();
    res.status(200).json(savedQuiz);
  } catch (error) {
    next(error);
  }
};

const getQuiz = async (req, res, next) => {
  try {
    const getSingleQuiz = await Quiz.findById(req.params.id);
    res.status(200).json(getSingleQuiz);
  } catch (error) {
    next(error);
  }
};

const getQuizes = async (req, res, next) => {
  try {
    const getAllQuiz = await Quiz.find();
    res.status(200).json(getAllQuiz);
  } catch (error) {
    next(error);
  }
};

const updateQuiz = async (req, res, next) => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedQuiz);
  } catch (error) {
    next(error);
  }
};

const deleteQuiz = async (req, res, next) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.status(200).json("Quiz Deleted Successfully");
  } catch (error) {
   next(error);
  }
};

export { addQuiz, getQuiz, getQuizes, updateQuiz, deleteQuiz };
