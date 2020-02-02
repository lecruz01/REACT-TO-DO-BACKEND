//Dependencias
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

//Configuraciones
const app = express();
const PORT = process.env.PORT || 3001;

//Modulos
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
const routesTodos = require("./routes/todos");
app.use("/todo", routesTodos);

app.listen(PORT, () => {
  console.log("Project running on port: " + PORT);
});

module.exports = app;
