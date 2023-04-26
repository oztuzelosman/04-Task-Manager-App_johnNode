const TaskList = require("../models/TaskList");

const getAll = async (req, res) => {
  try {
    const tasks = await TaskList.find({});
    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createNew = async (req, res) => {
  try {
    const task = await TaskList.create(req.body);
    res.status(201).json({ success: true, data: { task } });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
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
