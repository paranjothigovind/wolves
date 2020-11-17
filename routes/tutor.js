  
const express = require("express");
const cors = require("cors");
const nodemailer=require("nodemailer");

const appp = express();

var corsOptions = {
  origin: "https://virtualtutoring.herokuapp.com"
};


appp.use(cors(corsOptions));

module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller");
  
  //nodemailer
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'praveendaniel107@gmail.com',
      pass: 'danidt714'
    }
  });
  
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Nodemailer 
  router.post('/nodemailer', tutorials.nodemailer);
  
  // current user
  router.get("/currentUser/:phone",tutorials.findCurrentUser);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Filter the tutor based on some criteria
  router.get("/filter",tutorials.filter);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Retrieve requestedstudent
  router.get("/getRequestedStudent/:id",tutorials.findRequestedUser);

  // Update a Tutorial with id
  router.put("/:id",cors(), tutorials.update);

  // Update booksession booked students
  router.put("/bookedStudent/:id",tutorials.updateSession);

  // Retrieve requestedstudent
  router.get("/getRequestedStudent/:id",tutorials.findRequestedUser)

  // requested student array updation
  router.put("/addRequestedStudent/:id",tutorials.updateRequestedUser);

  // requested student array deletion
  router.put("/removeRequestedStudent/:id",tutorials.removeRequestedUser);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  //base route
  app.use("/tutor",cors(), router);
};