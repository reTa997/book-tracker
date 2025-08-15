const mongoose = require("mongoose");

const bookScheme = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: String,
    status: {
      type: String,
      enum: ["Planiram", "Čitam", "Pročitao"],
      default: "Planiram",
    },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookScheme);
