const Task = require("../models/taskModel");

// GET all
exports.getTasks = (req, res) => {
  res.json(Task.getAllTasks());
};

// GET one
exports.getTask = (req, res) => {
  const task = Task.getTaskById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

// CREATE
exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };

  Task.createTask(newTask);
  res.status(201).json(newTask);
};

// UPDATE
exports.updateTask = (req, res) => {
  const updated = Task.updateTask(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Task not found" });

  res.json(updated);
};

// DELETE
exports.deleteTask = (req, res) => {
  const deleted = Task.deleteTask(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Task not found" });

  res.json({ message: "Task deleted" });
};
