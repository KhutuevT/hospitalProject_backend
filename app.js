require("dotenv").config();
const mongoose = require("mongoose");
const schema = require("./src/graphQL/schema/schema");
const { ApolloServer } = require("apollo-server");
const { applyMiddleware } = require("graphql-middleware");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require("./src/graphQL/root/resolver");
const authMiddleware = require("./src/graphQL/root/resolvers/middleware/authMiddleware");

const PORT = process.env.PORT || 8080;

const newSchema = makeExecutableSchema({ typeDefs: schema, resolvers });

const app = new ApolloServer({
  schema: applyMiddleware(newSchema, authMiddleware),
  context: ({ req }) => ({ req }),
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
