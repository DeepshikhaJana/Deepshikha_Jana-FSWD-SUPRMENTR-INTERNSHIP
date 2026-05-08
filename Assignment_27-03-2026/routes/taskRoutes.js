const express = require("express");
const router = express.Router();

let tasks = [{ id: 1, title: "Learn Express", completed: false }];

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// GET single task
router.get("/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// CREATE task
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// UPDATE task
router.put("/:id", (req, res) => {
  const { title, completed } = req.body;

  let task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json({ message: "Task updated", task });
});

// DELETE task
router.delete("/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
});

module.exports = router;
