import Todo from "./models/todo";
import Category from "./models/category";

const resolvers = {
  Query: {
    getTodos: () =>
      Todo.find((err, todos) => {
        if (err) return console.error(err);
        return todos;
      }),
    getTodo: () => {
      Todo.find({ name: /^Tarea/ }, (err, todos) => {
        if (err) return console.error(err);
        return todos;
      });
    },
    getCategories: () =>
      Category.find((err, categories) => {
        if (err) return console.error(err);
        return categories;
      })
  },
  Mutation: {
    addTodo: (root, args) => {
      const newTodo = new Todo({
        title: "Test Todo",
        description: "Test Todo Description",
        expirationDate: "10/02/2020",
        completed: false,
        priority: 1,
        category: "1"
      });
      newTodo.save((err, todo) => {
        if (err) return console.log("Todo failed to add");
        console.log("Todo Added", todo);
      });
      return newTodo;
    },
    addCategory: (root, args) => {
      const newCategory = new Category({
        name: args.name
      });
      newCategory.save();
      return newCategory;
    }
  }
};

export default resolvers;
