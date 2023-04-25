const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://oztuzelosman:Havu_77589..@nodeexpressjohn.nr7zbws.mongodb.net/04-Task-Manager-App?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
