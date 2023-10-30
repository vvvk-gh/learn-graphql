//creating graphQL schema
//these is written in schema definition language desgined specially for GraphQL

const typeDefs = `#graphql
    type Query {
        greeting: String;
    }
`;
/*
resolver object implement the schema 
the actual code the represents the above schema
*/
const resolvers = {
    //should be of same type mentioned in schema
    Query: {
        /*same property mentioned in schema
        and this will be function returning the given datatype
        */
        greeting: () => 'Hello World!',
    },
};