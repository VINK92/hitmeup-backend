const { Schema, model } = require("mongoose");

const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  startLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    default: "beginner",
    required: true,
  },
  currentLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    default: "beginner",
    required: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
  learnedWords: {
    type: Array,
    default: [],
    required: true,
  },
  myWords: {
    type: Array,
    default: [],
    required: true,
  },
  notifications: {
    type: Boolean,
    default: false,
    required: true,
  },
  token: {
    type: String,
    required: false,
  },
});

module.exports = model("User", user);
