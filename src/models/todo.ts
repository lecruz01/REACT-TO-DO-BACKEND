import mongoose from "mongoose";
import TodoSchema from "../schemas/todo";

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
