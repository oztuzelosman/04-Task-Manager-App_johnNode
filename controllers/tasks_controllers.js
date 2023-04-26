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

const getSingle = async (req, res) => {
  try {
    const task = await TaskList.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "no task with this id" });
    }
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `THE TASK ${req.params.id} IS UPDATED` });
};

const deleteTask = async (req, res) => {
  try {
    const task = await TaskList.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "no task with this id" });
    }
    res.status(200).json({ success: true, task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAll,
  createNew,
  getSingle,
  updateTask,
  deleteTask,
};
