const Joi = require("joi");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const Word = require("../models/Word");
const Collocation = require("../models/Collocation");

class ValidationController {
  async validateUser(req, res, next) {
    const validationRules = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });

    const resValidation = validationRules.validate(req.body);

    if (resValidation.error) {
      return res.status(400).send(resValidation.error);
    }

    next();
  }
  async validateToken(req, res, next) {}

  async validateUserRole(req, res, next) {
    const validationRules = Joi.object({
      role: Joi.string().required(),
    });

    const resValidation = validationRules.validate(req.body);

    if (resValidation.error) {
      return res.status(400).send({ message: "You dont have accses" });
    }

    next();
  }

  async validateCreateWord(req, res, next) {
    const validationRules = Joi.object({
      word: Joi.string().required(),
      translate: Joi.array().required(),
      level: Joi.string()
        .valid("beginner", "intermediate", "advanced")
        .required(),
      image: Joi.string().required(),
      example: Joi.array().required(),
    });
    const resValidation = validationRules.validate(req.body);
    if (resValidation.error) {
      return res.status(400).send(resValidation.error);
    }
    next();
  }
  async validateWordId(req, res, next) {
    const {
      params: { wordId },
    } = req;
    try {
      const word = await Word.findById(wordId);
      if (!word) {
        return res.status(404).send({ message: "Not found" });
      }
      next();
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async validateCreateCollocation(req, res, next) {
    const validationRules = Joi.object({
      image: Joi.string().required(),
      level: Joi.string()
        .valid("beginner", "intermediate", "advanced")
        .required(),
      collocation: Joi.string().required(),
      translate: Joi.array().required(),
    });
    const resValidation = validationRules.validate(req.body);
    if (resValidation.error) {
      return res.status(400).send(resValidation.error);
    }
    next();
  }
  async validateCollocationId(req, res, next) {
    const {
      params: { collocationId },
    } = req;
    try {
      const word = await Collocation.findById(collocationId);
      if (!word) {
        return res.status(404).send({ message: "Not found" });
      }
      next();
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
}

module.exports = new ValidationController();
