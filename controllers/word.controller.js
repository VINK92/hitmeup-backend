const Joi = require("joi");
const Word = require("../Model/Word");

class WordsController {
  async getAllWords(req, res, next) {
    try {
      const words = await Word.find();
      res.status(200).json(words);
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async getWordById(req, res, next) {
    try {
      const {
        params: { wordId },
      } = req;
      const word = await Word.findById(wordId);
      if (!word) res.status(400).send({ message: "Bad request" });
      res.status(200).json(word);
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async deleteWord(req, res, next) {
    try {
      const {
        params: { wordId },
      } = req;
      await Word.findByIdAndRemove({ _id: wordId });
      res.status(200);
      res.json({ message: "word deleted" });
      res.end();
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async addWord(req, res, next) {
    try {
      const newWord = new Word({
        word: req.body.word,
        translate: req.body.translate,
        level: req.body.level,
        image: req.body.image,
        example: req.body.example,
      });
      await newWord.save();
      res.status(201).send({ message: "Word added successfully" });
      res.json(newWord);
      res.end();
    } catch (e) {
      console.log("Error", e);
      return process.exit(1);
    }
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
  async validateId(req, res, next) {
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
}

module.exports = new WordsController();
