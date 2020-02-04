import Todo from "./models/todo";
import Category from "./models/category";
import uuid from "uuid/v1";

const resolvers = {
  Query: {
    getTodos: (_, args) => {
      const { type } = args;
      return Todo.find({ category: { name: type } }, (err, todos) => {
        if (err) return console.error(err);
        return todos;
      });
    },
    getTodo: (_, args) => {
      const { id } = args;
      Todo.find({ id: id }, (err, todos) => {
        if (err) return console.error(err);
        return todos;
      });
    }
  },
  Mutation: {
    addTodo: async (_, args) => {
      const { title, description, expirationDate, priority, category } = args;
      const id = uuid();
      const newTodo = new Todo({
        id,
        title,
        description,
        expirationDate,
        completed: false,
        priority,
        category: {
          name: category.name
        }
      });
      newTodo.save((err, todo) => {
        if (err) return console.log("Todo failed to add");
        console.log("Todo Added", todo);
      });
      return newTodo;
    },
    updateTodo: (_, args) => {
      const { id } = args;
      const updatedTodo = Todo.findOneAndUpdate(
        { id },
        { category: { name: "papelera" } },
        { new: true }
      );
      return updatedTodo;
    },
    deleteTodo: (_, args) => {
      const { id } = args;
      return Todo.deleteOne({ id }, err => {
        if (err) return false;
        console.log(`Item with id ${id} was successfully removed from DB`);
      });
    },
    addCategory: (_, args) => {
      const newCategory = new Category({
        id: args.id,
        name: args.name
      });
      newCategory.save();
      return newCategory;
    }
  }
};

export default resolvers;
