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

    // published: req.body.published ? req.body.published : false
    phoneNumber:req.body.phoneNumber,
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    DOB:req.body.DOB,
    parentDOB:req.body.parentDOB,
    schoolName:req.body.schoolName,
    stream:req.body.stream,
    grade:req.body.grade,
    moreEducation:req.body.moreEducation,
    bankName:req.body.bankName,
    cardNumber:req.body.cardNumber,
    CVV:req.body.CVV,
    nameOfCard:req.body.nameOfCard,
    // bookedTutor:req.body.bookedTutor
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

//Retrieve current user details using phone
exports.findCurrentUser=(req,res)=>{
  const phone=req.params.phone;
  var condition = phone;
  // res.json("Current User"+phone);
  studentSchema.find({"phoneNumber":phone})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "STUDENT_NOT_FOUND_PHONE" + phone });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING_STUDENT_PHONE" + phone });
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

// Retrieve all Tutorials from the database.
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

// Find a single Tutorial with an id
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

// get upcoming session from student collection
exports.upcomingSession=(req,res)=>{
  const id = req.params.id;
  //res.send("route working");
  //console.log(id);
  studentSchema.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "NOT_FOUND"});
      else res.send(data.upcomingSession);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING"});
    });
};


//Update booked session
exports.updateSession = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "DATA_CANNOT_BE_EMPTY"
    });
  }

  const id = req.params.id;

  studentSchema.findByIdAndUpdate(id, {
    $push: {
      bookedTutors: req.body.bookedTutors
    }
  }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_UPDATE_STUDENT_${id}_MAY_BE_NOT_FOUND!`
        });
      } else res.send({ message: "DETAILS_UPDATED" });
    })
    .catch(err => {
      res.status(500).send({
        message: "ERROR_UPDATING_DETAILS_ID" + id
      });
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

//student transaction
exports.updateTransaction = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "DATA_CANNOT_BE_EMPTY"
    });
  }

  const id = req.params.id;
  var transaction={
    paymentId:req.body.paymentId,
    tutorId:req.body.tutorId,
    signature:req.body.signature,
    orderId:req.body.orderId,
    class:req.body.class,
    duration:req.body.duration
  }

  studentSchema.findByIdAndUpdate(id, {
    $push: {
      studentTransaction: transaction
    }
  }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_UPDATE${id}_MAY_BE_ID_NOT_FOUND`
        });
      } else res.send({ message: "DETAILS_UPDATED" });
    })
    .catch(err => {
      res.status(500).send({
        message: "ERROR_UPDATING" + id
      });
    });
};


// Delete a Tutorial with the specified id in the request
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

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  studentSchema.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ERROR_RETRIEVING_STUDENT"
      });
    });
};

