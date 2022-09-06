import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Name is too short"],
      maxLength: [30, "Name is too long"],
    },
    username: { type: String, required: true, unique: true, trim: true },
    phone: {
      type: Number,
      required: true,
      min: [10, "Please enter a valid Phone number!"],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password is too short"],
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("User", UserSchema);
