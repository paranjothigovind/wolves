  
const express = require("express");
const cors = require("cors");

const appp = express();

module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller");
  
  
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);  

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);


  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  router.get("/findByEmail/:email", cors(), tutorials.findCurrentUserByEmail)


  router.get("/course/:email",cors(), tutorials.getCourse)

  
  router.get("/course/:id/pc/:id1",cors(), tutorials.getParticularCourse)

  // Update a Tutorial with id
  router.put("/:id",cors(), tutorials.update);

  // Update course data
  router.put("/course/:id", cors(), tutorials.pushCourse)

  // Delete a Tutorial with id
  router.delete("/:id", cors(), tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  //base route
  app.use("/tutor",cors(), router);
};