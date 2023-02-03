const Collocation = require("../models/Collocation");

class CollocationsController {
  async getAllCollocations(req, res, next) {
    try {
      const collocation = await Collocation.find();
      res.status(200).json(collocation);
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async getCollocationById(req, res, next) {
    try {
      const {
        params: { collocationId },
      } = req;
      const collocation = await Collocation.findById(collocationId);
      if (!collocation) res.status(400).send({ message: "Bad request" });
      res.status(200).json(collocation);
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async deleteCollocation(req, res, next) {
    try {
      const {
        params: { collocationId },
      } = req;
      await Collocation.findByIdAndRemove({ _id: collocationId });
      res.status(200);
      res.json({ message: "collocation deleted" });
      res.end();
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
  async addCollocation(req, res, next) {
    try {
      const newcollocation = new Collocation({
        image: req.body.image,
        level: req.body.level,
        collocation: req.body.collocation,
        translate: req.body.translate,
      });
      await newcollocation.save();
      res.status(201).send({ message: "Collocation added successfully" });
      res.json(newcollocation);
      res.end();
    } catch (e) {
      console.log("Error", e);
      return process.exit(1);
    }
  }
}

module.exports = new CollocationsController();
