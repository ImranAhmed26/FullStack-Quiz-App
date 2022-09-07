import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resultSchema = Schema({
  name: { type: String, required: true },
  participants: [
    {
      userName: { type: String, required: true },
      userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
      marks: { type: Number, required: true, default: 0 },
      paid: { type: Boolean, default: false },
      paidAmount: { type: Number, default: 0 },
      refund: { type: Boolean, default: false },
    },
  ],
});

export default mongoose.model("Result", resultSchema);
