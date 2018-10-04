const { ApolloServer, gql } = require('apollo-server');

// Data
const todos = [
  { task: 'Wash my car', completed: false },
  { task: 'Clean room', completed: true }
];

// typeDefs
const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    getTodos: () => todos
  }
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Port
const port = 4000;

// Start server
server.listen(port).then(({ url }) => {
  console.log(`Server listening ${url}`);
});
