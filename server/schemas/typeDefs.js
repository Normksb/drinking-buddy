const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    age: Int
    weight: Int
    gender: String
  }

  type Drink {
    _id: ID
    Drink: String
    Potency: Int
    Volume: Int
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    drinks: [Drink]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(
      name: String!
      email: String!
      password: String!
      age: Int!
      weight: Int!
      gender: String
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
