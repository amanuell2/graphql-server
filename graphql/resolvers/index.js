const postsResolver = require("./Post");
const usersResolver = require("./User");

module.exports = {
  Query: {
    ...postsResolver.Query,
    ...usersResolver.Query,
  },
};
