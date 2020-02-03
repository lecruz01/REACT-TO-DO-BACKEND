//Dependencias
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import Category from "./models/category";

//Configuraciones
const app = express();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers
  });

  //Modulos
  app.use(logger("dev"));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Rutas
  const routesTodos = require("./routes/todos");
  app.use("/todos", routesTodos);

  apollo.applyMiddleware({ app });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Mongoose connection opened");
  });
  await mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.listen(PORT, () => {
    console.log("Project running on port: " + PORT + apollo.graphqlPath);
  });
};

startServer();

module.exports = app;
