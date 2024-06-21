const express = require("express");
const router = express.Router();
const TaskModel = require("../models/task");

// ye hai tera task create kre k liye
router.post("/create", async (req, res) => {
  try {
    const Task = new TaskModel({
      title: req.body.title,
      desc: req.body.desc,
    });
    await Task.save()
      .then(() => res.status(201).json("Task Created"))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

//task fetch krne k liye
router.get("/all", async (req, res) => {
  try {
    await TaskModel.find({})
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

// task id se fetch krne k liye
router.get("/:id", async (req, res) => {
  try {
    await TaskModel.findById(req.params.id)
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});
// task delete krne k liye
router.delete("/delete/:id", async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id)
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});
// task update krne k liye
router.put("/update/:id", async (req, res) => {
  try {
    await TaskModel.findByIdAndUpdate(req.params.id, { desc: req.body.desc })
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});
module.exports = router;
