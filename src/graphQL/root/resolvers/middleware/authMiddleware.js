const jwt = require("jsonwebtoken");

const isAuth = (headers) => {
  if (headers) {
    const token = headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("User is not authorized");
    }
    const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return user.id;
  }
};

const authMiddleware = {
  Query: {
    getAllVisits: async (resolve, parent, args, context, info) => {
      try {
        userId = isAuth(context.req.headers);
        return await resolve(parent, { userId, ...args });
      } catch (err) {
        return err;
      }
    },
  },
  Mutation: {
    addNewVisits: async (resolve, parent, args, context, info) => {
      try {
        userId = isAuth(context.req.headers);
        return await resolve(parent, { userId, ...args });
      } catch (err) {
        return err;
      }
    },
    updateVisit: async (resolve, parent, args, context, info) => {
      try {
        userId = isAuth(context.req.headers);
        return await resolve(parent, { userId, ...args });
      } catch (err) {
        return err;
      }
    },
    deleteVisit: async (resolve, parent, args, context, info) => {
      try {
        userId = isAuth(context.req.headers);
        return await resolve(parent, { userId, ...args });
      } catch (err) {
        return err;
      }
    },
  },
};

module.exports = authMiddleware;
