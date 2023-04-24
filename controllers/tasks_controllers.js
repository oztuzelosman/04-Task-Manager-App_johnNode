const getAll = (req, res) => {
  res.status(200).json({ success: true, data: "THE TASK LIST" });
};

const createNew = (req, res) => {
  res.status(200).json({ success: true, data: req.body.name });
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
