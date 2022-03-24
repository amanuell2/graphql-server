const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const { mongoose } = require("mongoose");

const { MONGODB_URI } = require("./config");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: 4000 });
  })
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
