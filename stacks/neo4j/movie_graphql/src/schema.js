const { gql } = require('apollo-server-express');
const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");


const typeDefs = gql`
  type Movie {
    title: String!
    year: Int
    plot: String
    actors: [Person!]! @relationship(type: "ACTED_IN", direction: IN)
  }

  type Person {
    name: String!
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }
`;

const driver = neo4j.driver(
  process.env.NEO4j_URI,
  // neo4j.auth.basic("neo4j", "password")
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

module.exports = neoSchema