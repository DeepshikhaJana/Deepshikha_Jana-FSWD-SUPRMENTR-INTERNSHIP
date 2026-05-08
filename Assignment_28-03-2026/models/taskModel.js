let tasks = [{ id: 1, title: "Learn MVC", completed: false }];

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find((t) => t.id == id);

const createTask = (task) => {
  tasks.push(task);
  return task;
};

const updateTask = (id, data) => {
  let task = tasks.find((t) => t.id == id);
  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.completed !== undefined) task.completed = data.completed;

  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex((t) => t.id == id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
