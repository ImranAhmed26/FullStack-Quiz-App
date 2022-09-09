import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuizSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, minLength: [5, "Name too Short"] },
    description: { type: String, required: true, minLength: [10, "Description too Short"] },
    image: { type: String },
    isPaid: { type: Boolean, default: false },
    courseFee: { type: Number, default: 0 },
    duration: { type: Number, require: true },
    fixedDuration: { type: Boolean, default: false },
    questions: [{ question: { type: String }, incorrectAnswer: [String], correctAnswer: [String] }],
  },
  {
    timestamps: { createdAt: true },
  },
);

export default mongoose.model("Quiz", QuizSchema);
