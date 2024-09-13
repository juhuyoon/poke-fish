const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

// we need to create and CONNECT our typeDefs and Resolvers
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
  // we need import typeDefs & resolvers
  typeDefs,
  resolvers
})

const db = require('./config/connection');

// const { Food } = require('./models/Food');

const app = express();
const PORT = process.env.PORT || 3001;

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: false}));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`connected to http://localhost:${PORT}`);
    });
  })
};

startApolloServer();

