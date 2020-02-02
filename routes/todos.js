const express = require("express");
const router = express.Router();

let todos = require("./db");

router.get("/all", async (req, res) => {
  try {
    res.status("200").json({
      data: todos
    });
  } catch (err) {
    res.status("400").json({
      message: "An error ocurred while processing this request",
      err
    });
  }
});

module.exports = router;
