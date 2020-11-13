  
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


  // Update a Tutorial with id
  router.put("/:id",cors(), tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  //base route
  app.use("/tutor",cors(), router);
};