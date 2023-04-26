const TaskList = require("../models/TaskList");

const getAll = (req, res) => {
  res.status(200).json({ success: true, data: "THE TASK LIST" });
};

const createNew = async (req, res) => {
  const task = await TaskList.create(req.body);
  res.status(201).json({ success: true, data: { task } });
};

const getSingle = (req, res) => {
  res.status(200).json({ success: true, data: req.params.id });
};

const updateTask = (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `THE TASK ${req.params.id} IS UPDATED` });
};

const deleteTask = (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `THE TASK ${req.params.id} IS DELETED` });
};

module.exports = {
  getAll,
  createNew,
  getSingle,
  updateTask,
  deleteTask,
};
