import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Todo {
    id: ID
    title: String!
    description: String
    expirationDate: String
    completed: Boolean
    priority: Int!
    category: String!
  }

  type Category {
    id: ID
    name: String
  }

  type Query {
    getTodos: [Todo!]
    getTodo(id: ID!): Todo
    getCategories: [Category!]!
  }

  type Mutation {
    addTodo(
      title: String
      description: String
      expirationDate: String
      completed: Boolean
      priority: Int
    ): Todo
    addCategory(name: String): Category
  }
`;

export default typeDefs;
