const User = require("../../../db/models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "24h" });
};

const userResolvers = {
  Mutation: {
    registration: async (_, { input }) => {
      try {
        const { login, password } = input;
        const candidate = await User.findOne({ login });
        if (candidate) {
          return  "A user with this login already exists."
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = new User({ login, password: hashPassword });
        return await user
          .save()
          .then(() => {
            const token = generateAccessToken(user._id);
            return token
          })
      } catch (err) {
        return err;
      }
    },
    authorization: async (_, { input }) => {
      try {
        const { login, password } = input;
        const user = await User.findOne({ login });
        if (!user) {
          return "User not found!";
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
          return res.status(401).json({ code: 301, message: "Wrong password" });
        }
        const token = generateAccessToken(user._id);
        return token;
      } catch (err) {
        return err;
      }
    },
  },
};

module.exports = userResolvers;
