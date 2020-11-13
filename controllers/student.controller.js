const db = require("../models");
const studentSchema=db.studentSchema;

// Create and Save a new details
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutor
  const tutorial = new studentSchema({

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
          err.message || "STUDENT_CREATE_ERROR"
      });
    });
};


//Retrieve current user details using email
exports.findCurrentUserByEmail=(req,res)=>{

  const email=req.body.email;
  var condition = email;
  // res.json("Current USer"+phone);
  studentSchema.find({"email":email})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "STUDENT_NOT_FOUND_EMAIL" + email });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING_STUDENT_EMAIL" + email });
    });
};

// Retrieve all Tutors from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { $regex: new RegExp(name), $options: "i" } } : {};

  studentSchema.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ERROR_RETRIEVING_ALL_STUDENT"
      });
    });
};

// Find a single Tutor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  studentSchema.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "STUDENT_NOT_FOUND_ID" + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING_STUDENT_ID" + id });
    });
};


// Update a Tutor by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "DATA_CANNOT_BE_EMPTY"
    });
  }

  const id = req.params.id;

  studentSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_UPDATE_STUDENT_${id}_MAY_BE_NOT_FOUND!`
        });
      } else res.send({ message: "DETAILS_UPDATED" });
    })
    .catch(err => {
      res.status(500).send({
        message: "ERROR_UPDATING_DETAILS" + id
      });
    });
};


// Delete a Tutor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  studentSchema.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_DELETE_STUDENT_${id}_MAY_BE_NOT_FOUND!`
        });
      } else {
        res.send({
          message: "STUDENT_DELETED"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "STUDENT_NOT_DELETED" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    studentSchema.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} STUDENTS_DELETED`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ERROR_DELETING_STUDENTS"
      });
    });
};
