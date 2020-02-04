//Dependencias
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import mongoConnect from "./db/connect";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

//Configuraciones
const app = express();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers
  });

  await mongoConnect();

  //Modulos
  app.use(logger("dev"));
  app.use(cors());
  app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
  app.use(/\/((?!graphql).)*/, bodyParser.json());

  // Rutas
  apollo.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      credentials: true,
      origin: "http://localhost:3000"
    }
  });

  app.listen(PORT, () => {
    console.log(`Project running on port: ${PORT}${apollo.graphqlPath}`);
  });
};

startServer();

module.exports = app;
