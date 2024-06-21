// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express();
// const PORT = 8000;

// // MongoDB connection
// mongoose.connect(
//   "mongodb+srv://joy:Pedalstart@111@cluster0.ybzb7wg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Define Schema and Model for Task
// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   dueDate: Date,
// });

// const Task = mongoose.model("Task", taskSchema);

// // Routes for CRUD operations
// // Example: Get all tasks
// app.get("/api/tasks", (req, res) => {
//   Task.find((err, tasks) => {
//     if (err) {
//       res.status(500).send("Error retrieving tasks");
//     } else {
//       res.json(tasks);
//     }
//   });
// });
// // Other CRUD routes (POST, PUT, DELETE) will be similar

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const task = require("./routes/task");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://joy:Pedalstart111@cluster0.ybzb7wg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connection successful");
  });

app.use(
  cors({
    origin: ["https://www.google.com/"],
    origin: "*",
    allowedHeaders: "X-Requested-With, Content-Type, Authorization",
    methods: "GET, POST, PATCH, PUT, POST, DELETE, OPTIONS",
  })
);

app.use(express.json());

app.use("/task", task);

app.listen(8000, () => {
  "Server connected successfully";
});
