const { Schema, model } = require("mongoose");

const word = new Schema({
  word: {
    type: String,
    required: true,
  },
  translate: [
    {
      type: String,
      required: true,
    },
  ],
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  example: [
    {
      translate: {
        type: String,
        required: true,
      },
      usage: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = model("Word", word);
