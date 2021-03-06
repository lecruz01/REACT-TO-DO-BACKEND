"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var todo_1 = __importDefault(require("../schemas/todo"));
var Todo = mongoose_1.default.model("Todo", todo_1.default);
exports.default = Todo;
