import mongoose from "mongoose";

const mongoConnect = async () => {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Mongoose connection opened");
  });
  return mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export default mongoConnect;
