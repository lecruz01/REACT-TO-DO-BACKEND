import { gql } from "apollo-server-express";

const typeDefs = gql`
  input CategoryInput {
    name: String!
  }

  type Todo {
    id: ID
    title: String!
    description: String
    expirationDate: String
    completed: Boolean
    priority: Int!
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    getTodos(type: String): [Todo!]!
    getTodo(id: ID!): Todo
  }

  type Mutation {
    addTodo(
      title: String!
      description: String
      expirationDate: String
      completed: Boolean!
      priority: Int!
      category: CategoryInput!
    ): Todo!
    updateTodo(id: String!, data: [String]!): Todo!
    deleteTodo(id: String): Todo!
    addCategory(id: String, name: String): Category!
  }
`;

export default typeDefs;
