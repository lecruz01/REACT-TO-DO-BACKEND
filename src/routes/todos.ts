import express from "express";
// import Todo from "../";
const router = express.Router();

const todos = require("../db/todoDb");
const categories = require("../db/categories");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: todos
    });
  } catch (err) {
    res.status(400).json({
      message: "An error ocurred while processing this request",
      err
    });
  }
});

router.post("/add", async (req, res) => {
  try {
    console.log(req);
  } catch (err) {
    res.status(500).json({
      message: "An error ocurred while processing this request",
      err
    });
  }
});

router.get("/categories", async (req, res) => {
  try {
    res.status(200).json({
      data: categories
    });
  } catch (err) {
    res.status(400).json({
      message: "An error ocurred while processing this request",
      err
    });
  }
});

module.exports = router;
