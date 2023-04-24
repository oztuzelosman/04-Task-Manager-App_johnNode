const express = require("express");
const router = express.Router();
const {
  getAll,
  createNew,
  getSingle,
  updateTask,
  deleteTask,
} = require("../controllers/tasks_controllers.js");

router.get("/", getAll);

router.post("/", createNew);

router.get("/:id", getSingle);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
