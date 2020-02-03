import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  expirationDate: String,
  completed: Boolean,
  priority: Number,
  category: {
    id: String,
    name: String,
    todos: Array
  }
});

export default TodoSchema;
