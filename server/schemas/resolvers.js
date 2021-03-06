const { AuthenticationError } = require("apollo-server-express");
const { User, Drinks } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    users: async () => {
      return User.find();
    },
    drinks: async () => {
      return Drinks.find();
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password, age, weight, gender }) => {
      const user = await User.create({
        name,
        email,
        password,
        age,
        weight,
        gender,
      });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log(email);
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email address found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
