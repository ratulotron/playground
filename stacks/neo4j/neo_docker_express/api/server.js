import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer, gql } from "apollo-server";
import neo4j from "neo4j-driver";

// (You may need to replace your connection details, username and password)
const AURA_ENDPOINT = "bolt://neo:7687"  // 'neo4j+s://<Bolt url for Neo4j Aura database>';
// const USERNAME = '<Username for Neo4j Aura database>';
// const PASSWORD = '<Password for Neo4j Aura database>';

// Create Neo4j driver instance
const driver = neo4j.driver(AURA_ENDPOINT, 
  // neo4j.auth.basic(USERNAME, PASSWORD), { encrypted: true } 
);

const typeDefs = gql`
  type Movie {
    title: String!
    actors: [Person!]!
      @relationship(type: "ACTED_IN", direction: IN)
  }

  type Person {
    name: String!
  }
`;

// Create instance that contains executable GraphQL schema from GraphQL type definitions
const neo4jGraphQL = new Neo4jGraphQL({
  typeDefs,
  driver
});

// Generate GraphQL schema
neo4jGraphQL.getSchema().then((schema) => {
  // Create ApolloServer instance to serve GraphQL schema
  const server = new ApolloServer({
    schema
  });

  // Start ApolloServer
  server.listen().then(({ url }) => {
    console.log(`GraphQL server ready at ${url}`);
  });
})
