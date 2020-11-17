const express = require("express");
const cors = require("cors");

const appp = express();

var corsOptions = {
  origin: "https://virtualtutoring.herokuapp.com"
};


appp.use(cors(corsOptions));

module.exports = app => {
  const student = require("../controllers/student.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", student.create);

  //current user
  router.get("/currentUser/:phone",student.findCurrentUser);

  //current user by email
  router.get("/currentUser",student.findCurrentUserByEmail);

  // Retrieve all student
  router.get("/", student.findAll);

  // Retrieve all published student
  router.get("/published", student.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", student.findOne);

  // Retrieve upcoming session
  router.get("/upcomingSession/:id",student.upcomingSession);

  // Update a Tutorial with id
  router.put("/:id", student.update);

  // Update booksession
  router.put("/bookedTutor/:id",student.updateSession);

  // student transaction
  router.put("/transaction/:id",student.updateTransaction);

  // Delete a Tutorial with id
  router.delete("/:id", student.delete);

  // Create a new Tutorial
  router.delete("/", student.deleteAll);

  
  app.use("/student",cors(), router);
};