import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: { type: String },
  description: { type: String },
  questions: [
    {
      type: Object,
      contains: {
        question: String,
        options: { type: Array },
        answer: String,
      },
    },
  ],
});

export default mongoose.model("Quiz", QuizSchema);
