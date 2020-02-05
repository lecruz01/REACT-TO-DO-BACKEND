"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var TodoSchema = new mongoose_1.default.Schema({
    id: String,
    title: String,
    description: String,
    expirationDate: String,
    completed: Boolean,
    priority: Number,
    category: {
        id: String,
        name: String
    }
});
exports.default = TodoSchema;
