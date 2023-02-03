const Joi = require("joi");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Word = require("../models/Word");

class UsersController {
  async addWordToMyWords(req, res, next) {
    const {
      params: { userId },
    } = req;
    try {
      const user = await User.findById(userId);
      if (user.myWords.includes(req.body.wordId)) {
        return res.status(400).json("Word is already exist at your words");
      }
      user.myWords = [...user.myWords, req.body.wordId];
      const updatedUser = await User.findByIdAndUpdate(userId, user);
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async addWordToLearned(req, res, next) {
    const {
      params: { userId },
    } = req;

    try {
      const user = await User.findOne(userId);
      if (user.learnedWords.containe(req.body.learnedWords)) {
        res.status(400).json("Word is already exist at your learned words");
      }
      const updatedUser = await User.findOneAndUpdate(
        userId,
        req.body.learnedWords,
        { learnedWords: [...req.body.learnedWords] }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async addAvatar(req, res, next) {}
  async changeCurrentLevel(req, res, next) {}
  async changeStartLevel(req, res, next) {}

  async addToMyCollocations(req, res, next) {}
  async addToLearnedCollocations(req, res, next) {}
  async deleteFromMyWords(req, res, next) {}
  async deleteFromLearnedWords(req, res, next) {}
  async deleteFromMyCollocations(req, res, next) {}
  async deleteFromLearnedCollocations(req, res, next) {}
  async updateNotifications(req, res, next) {}

  async validateWord(req, res, next) {
    const validationRules = Joi.object({
      word: Joi.string().required(),
      translate: Joi.array().items(Joi.string()).required(),
      level: Joi.string().required(),
      image: Joi.string().required(),
      example: Joi.array().items(
        Joi.object({
          translate: Joi.string(),
          usage: Joi.string(),
        })
      ),
    });

    const validationResult = validationRules.validate(req.body);

    if (validationResult.error) {
      return res.status(400).send(validationResult.error.message);
    }

    next();
  }
}

module.exports = new UsersController();
