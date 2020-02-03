import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  id: String,
  name: String
});

export default CategorySchema;
