const User = require("../user/User");

class AdminController {
  async getAllUsers(req, res, next) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log("Error: ", error);
      process.exit(1);
    }
  }
}

module.exports = new AdminController();
