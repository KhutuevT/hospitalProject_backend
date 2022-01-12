const User = require("../../db/models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "24h" });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { login, password } = req.body;
      const loginIsValid = login.match(/^[а-яА-Яa-zA-Z\d]{6,}$/gm);
      const passwordIsValid = password.match(/^(?=.*\d)[a-zA-Z\d]{6,}$/gm);
      if (!loginIsValid || !passwordIsValid) {
        return res.status(400).json({ message: "Invalid password or login" });
      }
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "A user with this login already exists." });
      }

      const hashPassword = await bcrypt.hash(password, 3);
      const user = new User({ login, password: hashPassword });
      await user.save();
      const token = generateAccessToken(user._id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
}

module.exports = new UserController();
