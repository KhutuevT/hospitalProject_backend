const userResolvers = require("./resolvers/userResolvers");
const visitResolvers = require("./resolvers/visitResolvers");

const resolvers = {
  Query: {
    ...visitResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...visitResolvers.Mutation,
  },
};

module.exports = resolvers;
