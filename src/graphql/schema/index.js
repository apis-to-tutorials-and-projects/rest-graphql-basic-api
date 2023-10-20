const { buildSchema } = require('graphql');

module.exports = {
  // Definir un esquema GraphQL
  schema: buildSchema(`
        type Query {
        message: String
        }
        `),
};
