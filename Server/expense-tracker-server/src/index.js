import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const connectString = '***REMOVED***';

  await server.start();
  server.applyMiddleware({ app });

  await mongoose.connect(connectString, {
    useNewUrlParser: true
  }, () => console.log('DB Connected'));

  app.listen({ port: 8080 }, () =>
    console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
  );
};

startServer();