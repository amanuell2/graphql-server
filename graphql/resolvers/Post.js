const Post = require("../../models/Post");

module.exports = {
  Query: {
    async getPosts() {
      try {
        return await Post.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
