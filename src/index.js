// Dependencies
const { ApolloServer, gql } = require('apollo-server');

// Creating a schemas or also knows as type definitions
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

// Creating the resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello Cristina Rojas, Welcome!'
  }
}

// Creating our instance of Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// .the is waiting for start up and then destructuring the url
server.listen().then(({url}) =>  console.log(`Server started at ${url}`));
