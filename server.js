const { ApolloServer, gql } = require('apollo-server');

const todos = [
  { task: 'Wash my car', completed: false },
  { task: 'Clean room', completed: true }
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }
`;

const server = new ApolloServer({
  typeDefs
});

const port = 4000;

server.listen(port).then(({ url }) => {
  console.log(`Server listening ${url}`);
});
