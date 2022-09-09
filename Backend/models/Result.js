import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resultSchema = Schema(
  {
    name: { type: String, required: true },
    quiz: { type: Schema.Types.ObjectId, required: true, ref: "Quiz" },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    marks: { type: Number, required: true, default: 0 },
    paid: { type: Boolean, default: false },
    paidAmount: { type: Number, default: 0 },
    refund: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: true },
  },
);

export default mongoose.model("Result", resultSchema);
