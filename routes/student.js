const express = require("express");
const cors = require("cors");

const appp = express();


module.exports = app => {
  const student = require("../controllers/student.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", student.create);

  //current user by email
  router.get("/currentUser",student.findCurrentUserByEmail);

  // Retrieve all student
  router.get("/", student.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", student.findOne);

  // Update a Tutorial with id
  router.put("/:id", student.update);

  // Delete a Tutorial with id
  router.delete("/:id", student.delete);

  // Create a new Tutorial
  router.delete("/", student.deleteAll);

  
  app.use("/student",cors(), router);
};