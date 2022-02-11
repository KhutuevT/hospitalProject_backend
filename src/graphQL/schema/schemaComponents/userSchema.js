module.exports = `
type User {
  id: ID,
  login: String,
  password: String
}

input UserInput {
  login: String!
  password: String!
}

type Mutation {
  registration(input: UserInput!): String!
  authorization(input: UserInput!): String!
}
`;
