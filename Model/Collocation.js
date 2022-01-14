const { Schema, model } = require("mongoose");

const collocation = new Schema({
  image: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  collocation: {
    type: String,
    required: true,
  },
  translate: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = model("Collocation", collocation);
