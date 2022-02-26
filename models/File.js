import { Schema as _Schema, models, model } from "mongoose";

const Schema = new _Schema({
  folder_id: {
    type: String,
    required: true,
    trim: true,
    maxlength: [64, "Folder ID cannot be more than 64 characters"],
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [64, "Name cannot be more than 64 characters"],
  },
  data: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

Schema.pre('save', function(next) {
  this.data = JSON.stringify([
    {
      title: "title",
      tabs: {
        html: "<h1>Hello World</h1>",
        css: "body { color: red; }",
        js: "console.log('Hello World')",
      },
      order: ["html", "css", "js"],
      render: ["html", "css", "js"]
    },
    {
      title: "title",
      tabs: {
        html: "<h1>Hello World</h1>",
        css: "body { color: red; }",
        js: "console.log('Hello World')",
      },
      order: ["html", "css", "js"],
      render: ["html", "css", "js"]
    }
  ]);
  next();
});

export default models.File || model("File", Schema);