const { randomUUID } = require("crypto");

const Task = require("../models/Task");
const { isDatabaseConnected } = require("../config/db");

const inMemoryTasks = [];

const getTasks = async (req, res) => {
  try {
    if (isDatabaseConnected()) {
      const tasks = await Task.find();
      return res.json(tasks);
    }

    return res.json(inMemoryTasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const trimmedTitle = title.trim();

    if (isDatabaseConnected()) {
      const task = await Task.create({ title: trimmedTitle });
      return res.status(201).json(task);
    }

    const task = {
      _id: randomUUID(),
      title: trimmedTitle,
    };

    inMemoryTasks.unshift(task);

    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
};
