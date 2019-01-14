const { ApolloServer, AuthenticationError } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

// Import "typeDefs.gql" and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers');

// Import Environment Variables and Mongoose models
require('dotenv').config({ path: 'variables.env' });
const User = require('./models/User');
const Post = require('./models/Post');

// Connect to DB
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err));

// Verify JWT Token passed from client
const getUser = async token => {
  if (token) {
    try {
      let user = jwt.verify(token, process.env.SECRET);
      console.log(user);
    } catch (err) {
      throw new AuthenticationError(
        'Your session has ended. Please sign in again.'
      );
    }
  }
};

// Create Apollo/GraphQL Server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers['authorization'];
    return { User, Post, currentUser: await getUser(token) };
  }
});

// Port
const port = 4000;

// Start server
server.listen(port).then(({ url }) => {
  console.log(`Server listening ${url}`);
});
