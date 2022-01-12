const User = require("../../db/models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "24h" });
};


module.exports.registration = async(req, res, next) => {
    try {
      const { login, password } = req.body;
      const body = req.body;
      if (
        body.hasOwnProperty("login") &&
        login.trim().lenght !==0 &&
        body.hasOwnProperty("password") &&
        password.trim().lenght !==0
      ) {
        const candidate = await User.findOne({ login });
        if (candidate) {
          return res
            .status(400)
            .json({ message: "A user with this login already exists." });
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const user = new User({ login, password: hashPassword });
        await user
          .save()
          .then(() => {
            const token = generateAccessToken(user._id);
            return res.json({ token });
          })
          .catch((e) => {
            res.status(400).json({ e });
          });
      } else {
        res.status(400).json({ message: "Empty fields" });
      }
    } catch (e) {
      res.status(400).json({ message: "Registration error" });
    }
}
