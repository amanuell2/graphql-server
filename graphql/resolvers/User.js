const User = require("../../models/User");

module.exports = {
  Query: {
    async getUsers() {
      try {
        return await User.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
