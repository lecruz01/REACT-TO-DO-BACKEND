"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Dependencias
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
//Configuraciones
var app = express_1.default();
var PORT = process.env.PORT || 3001;
//Modulos
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// Rutas
var routesTodos = require("./routes/todos");
app.use("/todos", routesTodos);
app.listen(PORT, function () {
    console.log("Project running on port: " + PORT);
});
module.exports = app;
