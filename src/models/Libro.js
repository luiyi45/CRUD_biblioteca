import { Schema, model } from "mongoose";

const libroSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Number
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);



export default model("Libro", libroSchema);
