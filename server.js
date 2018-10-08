const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Import "typeDefs.gql" and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers');

// Import Environment Variables and Mongoose models
require('dotenv').config({ path: 'variables.env' });

// Mongoose schemas
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

// Create Apollo/GraphQL Server using typeDefs, resolvers, and context object
const context = {
  User,
  Post
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

// Port
const port = 4000;

// Start server
server.listen(port).then(({ url }) => {
  console.log(`Server listening ${url}`);
});
