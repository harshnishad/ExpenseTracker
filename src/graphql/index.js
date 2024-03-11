import { createSchema } from "graphql-yoga";
import { TypeDefs as userTypeDefs, resolvers as userResolvers } from "./models/user.js";
import _ from 'lodash';

const queries = /* GraphQL */ `
  type Query {
    hello: String
  }
`;
const resolver = {
  Query: {
    hello: () => 'Hello from Yoga!',
  }
};

export const schema = createSchema({
  typeDefs: [queries, userTypeDefs], //yaha queries hoti h schema ka syntax
  resolvers: _.merge(resolver, userResolvers) //yaha resove hoti h
});
