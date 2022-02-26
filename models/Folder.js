import { Schema as _Schema, models, model } from "mongoose";

const Schema = new _Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [64, "Name cannot be more than 64 characters"],
  },
  files: [
    {
      _id: {
        type: String,
        required: true,
        trim: true,
        maxlength: [64, "File ID cannot be more than 64 characters"],
      },
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [64, "Name cannot be more than 64 characters"],
      }
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Folder || model("Folder", Schema);