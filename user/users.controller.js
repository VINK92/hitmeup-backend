const Joi = require("joi");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const User = require("../user/User");

class UsersController {
  async addWordToMyWords(req, res, next) {
    const validationRules = Joi.object({
      subscription: Joi.string().valid("free", "pro", "premium").required(),
    });

    const validationResult = validationRules.validate(req.body);

    if (validationResult.error) {
      return res.status(400).send(validationResult.error.message);
    }

    next();
  }
  async addWordToLearned(req, res, next) {
    const {
      params: { userId },
    } = req;

    try {
      const updatedUser = await User.findOneAndUpdate(
        userId,
        req.body.subscription,
        { new: true }
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
  async addToMyWords(req, res, next) {}
  async addToLearnedWords(req, res, next) {}
  async addToMyCollocations(req, res, next) {}
  async addToLearnedCollocations(req, res, next) {}
  async deleteFromMyWords(req, res, next) {}
  async deleteFromLearnedWords(req, res, next) {}
  async deleteFromMyCollocations(req, res, next) {}
  async deleteFromLearnedCollocations(req, res, next) { }
  async updateNotifications(req, res, next){}
}

module.exports = new UsersController();
