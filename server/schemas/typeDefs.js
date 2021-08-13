const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    age: Number
    weight: Number
    gender: String
  }

  type Drink {
    _id: ID
    drink: String
    Potency: Number
    Volume: Number
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!, age: Number!, weight: Number!, gender: String): Auth
    login(email: String!, password: String!): Auth
    
        
  }
`;

module.exports = typeDefs;
