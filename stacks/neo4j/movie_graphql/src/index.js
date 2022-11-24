'use strict'

const { ApolloServer } = require('apollo-server-express');
const {
    gql,
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
    // ApolloServerPluginLandingPageProductionDefault,
    // ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const express = require('express');
const http = require('http');
const neoSchema = require('./schema');


async function startApolloServer(neoSchema) {
    // Required logic for integrating with Express
    const app = express();
    app.get('/', function (req, res) {
        res.send('Hello World');
    });

    // Our httpServer handles incoming requests to our Express app.
    // Below, we tell Apollo Server to "drain" this httpServer,
    // enabling our servers to shut down gracefully.
    const httpServer = http.createServer(app);
    const schema = await neoSchema.getSchema();

    // Same ApolloServer initialization as before, plus the drain plugin
    // for our httpServer.
    const server = new ApolloServer({
        schema: schema,
        introspection: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault({
                embed: true,
                footer: false,
                document: gql`
                query {
                    movies {
                        title
                    }
                }
            `}),
            // ApolloServerPluginLandingPageGraphQLPlayground(),
            // ApolloServerPluginLandingPageProductionDefault()
        ],
        playground: {
            settings: {
                'editor.theme': 'light',
            },
            // tabs: [
            //     {
            //         '/playground',
            // query: defaultQuery,
            // },
            // ],
        },

    });

    // More required logic for integrating with Express
    await server.start();
    server.applyMiddleware({
        app,

        // By default, apollo-server hosts its GraphQL endpoint at the
        // server root. However, *other* Apollo Server packages host it at
        // /graphql. Optionally provide this to match apollo-server.
        path: '/graphql',
    });

    // Modified server startup
    await new Promise(resolve => httpServer.listen({ port: process.env.GRAPHQL_PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${process.env.GRAPHQL_PORT}${server.graphqlPath}`);
}

startApolloServer(neoSchema);