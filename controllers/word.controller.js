const Joi = require("joi");
const Word = require("../models/Word");

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
      const value = req.body.value;
      const newWord = new Word({
        word: value.word,
        translate: value.translate,
        level: value.level,
        image: value.image,
        example: value.example,
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
}

module.exports = new WordsController();
