const express = require("express");
const app = express();
const PORT = 5000;

const connectDB = require("./db/connect");
require("dotenv").config();

const task_router = require("./routes/task_router.js");

app.use(express.json());
app.use("/api/v1/tasks", task_router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log("listening on port 5000"));
  } catch (err) {
    console.log(err);
  }
};

start();
