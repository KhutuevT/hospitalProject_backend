const { print } = require("graphql");
const { buildSchema } = require("graphql");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const userSchema = require('./schemaComponents/userSchema')
const visitSchema = require('./schemaComponents/visitSchema')

const schema = [userSchema, visitSchema];

module.exports = buildSchema(`
  ${print(mergeTypeDefs(schema))}
`);