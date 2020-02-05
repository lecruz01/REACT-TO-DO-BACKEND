"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  input CategoryInput {\n    name: String!\n  }\n\n  type Todo {\n    id: ID\n    title: String!\n    description: String\n    expirationDate: String\n    completed: Boolean\n    priority: Int!\n    category: Category!\n  }\n\n  type Category {\n    id: ID!\n    name: String!\n  }\n\n  type Query {\n    getTodos(type: String): [Todo!]!\n    getTodo(id: ID!): Todo\n  }\n\n  type Mutation {\n    addTodo(\n      title: String!\n      description: String\n      expirationDate: String\n      completed: Boolean!\n      priority: Int!\n      category: CategoryInput!\n    ): Todo!\n    updateTodo(id: String!, data: [String]!): Todo!\n    deleteTodo(id: String): Todo!\n    addCategory(id: String, name: String): Category!\n  }\n"], ["\n  input CategoryInput {\n    name: String!\n  }\n\n  type Todo {\n    id: ID\n    title: String!\n    description: String\n    expirationDate: String\n    completed: Boolean\n    priority: Int!\n    category: Category!\n  }\n\n  type Category {\n    id: ID!\n    name: String!\n  }\n\n  type Query {\n    getTodos(type: String): [Todo!]!\n    getTodo(id: ID!): Todo\n  }\n\n  type Mutation {\n    addTodo(\n      title: String!\n      description: String\n      expirationDate: String\n      completed: Boolean!\n      priority: Int!\n      category: CategoryInput!\n    ): Todo!\n    updateTodo(id: String!, data: [String]!): Todo!\n    deleteTodo(id: String): Todo!\n    addCategory(id: String, name: String): Category!\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
