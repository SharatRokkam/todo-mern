const express = require("express");

const router = express.Router();

const Todo = require("../models/Todo.js");

//api endpoint

// create the todos
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
    });

    const savedTodo = await newTodo.save();

    res.status(200).json(savedTodo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//read the todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Task
// router.get("/:id")

//delete the todos
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Todo Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//update the todos
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        text: req.body.text,
      },
      {
        new: true,
      },
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// router.get('/about', async (req, res) =>{

// })

module.exports = router;
