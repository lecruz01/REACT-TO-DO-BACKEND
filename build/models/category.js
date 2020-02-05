"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var category_1 = __importDefault(require("../schemas/category"));
var Category = mongoose_1.default.model("Category", category_1.default);
exports.default = Category;
