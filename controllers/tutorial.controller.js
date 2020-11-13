const db = require("../models");
const Tutorial=db.tutorials;



// Create and Save a new details
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "DATA_CANNOT_BE_EMPTY" });
    return;
  }

  // Create a Tutorial
  const tutorial = new Tutorial({

        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        image :req.body.image, 
        phone:req.body.phone,
        aboutMe:req.body.aboutMe,
        city:req.body.city,
        gender:req.body.gender,
        country:req.body.country,
        company:req.body.company,
        school:req.body.school,
        homeTown:req.body.homeTown,
        languages:req.body.languages,
        courseId:req.body.courseId,
        courseDept:req.body.courseDept,
        description:req.body.description,
        courseRoom:req.body.courseRoom,
        waitListCapacity:req.body.waitListCapacity,
        courseTeam:req.body.courseTeam

  
  });

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "TUTOR_CREATE_ERROR"
      });
    });
};


// Retrieve all Tutor from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { $regex: new RegExp(name), $options: "i" } } : {};

  Tutorial.find()
    .then(data => {
      res.send(data);
     // res.send(data[0].email+" what is this shit?");

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutors."
      });
    });
};

// Retrieve current user details
exports.findCurrentUser=(req,res)=>{
  const phone=req.params.phone;
  var condition = phone;
  // res.json("Current USer"+phone);
  Tutorial.find({"phoneNumber":phone})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "TUTOR_NOT_FOUND_PHONE" + phone });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING_TUTOR_PHONE" + phone });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  //console.log(id);
  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "TUTOR_NOT_FOUND_ID" + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING_TUTOR_ID" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "DATA_CANNOT_BE_EMPTY"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_UPDATE_TUTOR_${id}_MAY_BE_NOT_FOUND!`
        });
      } else res.send({ message: "DETAILS_UPDATED" });
    })
    .catch(err => {
      res.status(500).send({
        message: "ERROR_UPDATING_DETAILS" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_DELETE_TUTOR_${id}_MAY_BE_NOT_FOUND!`
        });
      } else {
        res.send({
          message: "TUTOR_DELETED"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "TUTOR_NOT_DELETED" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} TUTORS_DELETED`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ERROR_DELETING_TUTORS"
      });
    });
};
