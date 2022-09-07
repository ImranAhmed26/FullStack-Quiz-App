import Result from "../models/Result.js";

const addResult = async (req, res, next) => {
  try {
    const newResult = new Result(req.body);
    const savedResult = await newResult.save();
    res.status(200).json(savedResult);
  } catch (error) {
    next(error);
  }
};

const getResult = async (req, res, next) => {
  try {
    const getSingleResult = await Result.findById(req.params.id);
    res.status(200).json(getSingleResult);
  } catch (error) {
    next(error);
  }
};

const getResults = async (req, res, next) => {
  try {
    const getAllResults = await Result.find();
    res.status(200).json(getAllResults);
  } catch (error) {
    next(error);
  }
};

const updateResult = async (req, res, next) => {
  try {
    const updatedResult = await Result.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedResult);
  } catch (error) {
    next(error);
  }
};

const deleteResult = async (req, res, next) => {
  try {
    await Result.findByIdAndDelete(req.params.id);
    res.status(200).json("Result Deleted Successfully");
  } catch (error) {
    next(error);
  }
};

export { addResult, getResult, getResults, updateResult, deleteResult };
