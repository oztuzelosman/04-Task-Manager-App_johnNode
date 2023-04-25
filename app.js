const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const PORT = 5000;
const task_router = require("./routes/task_router.js");

app.use(express.json());
app.use("/api/v1/tasks", task_router);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, console.log("listening on port 5000"));
  } catch (err) {
    console.log(err);
  }
};

start();
