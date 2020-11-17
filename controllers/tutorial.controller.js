const db = require("../models");
const Tutorial=db.tutorials;
var nodemailer = require('nodemailer');
const studentSchema=db.studentSchema;
const fs=require('fs');
const readline=require('readline')
const {google}=require('googleapis')


// Create and Save a new details
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "DATA_CANNOT_BE_EMPTY" });
    return;
  }

  // Create a Tutorial
  const tutorial = new Tutorial({

    // published: req.body.published ? req.body.published : false
        // phoneNumber:req.body.phoneNumber,

        name:req.body.name,
        email:req.body.email,
        // password:req.body.password,
        gender:req.body.gender,
        dob:req.body.dob,
        collegeName:req.body.collegeName,
        stream:req.body.stream,
        degree:req.body.degree,
        moreEducation:req.body.moreEducation,
        organisationName:req.body.organisationName,
        position:req.body.position,
        duration:req.body.duration,
        currentlyWorking:req.body.currentlyWorking,
        description:req.body.description,
        moreJob:req.body.moreJob,
        courseOffering:req.body.courseOffering,
        courseDuration:req.body.courseDuration,
        tutoringLevel:req.body.tutoringLevel,
        moreCourse:req.body.moreCourse,
        bankName:req.body.bankName,
        cardNumber:req.body.cardNumber,
        CVV:req.body.CVV,
        nameOfCard:req.body.nameOfCard,
        //Get the timigs of class
        //classFromTime:req.body.classFromTime,
        //classToTime: duration+classFromTime

        availability:req.body.availability,

        bookedStudents:req.body.bookedStudents,

        classes:req.body.classes,
        students:req.body.students,
        rating:req.body.rating,
        fans:req.body.fans,
        payment:req.body.payment,
        totalClassDuration:req.body.totalClassDuration,
        
        feedback:req.body.feedback,
        totalClasses:req.body.totalClasses,
        totalHours:req.body.totalHours,
        totalAmountEarn:req.body.totalAmountEarn,
        // requestedStudents:req.body.requestedStudents
        
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


// Retrieve all Tutorials from the database.
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

// get requested student array from tutor collection
exports.findRequestedUser=(req,res)=>{
  const id = req.params.id;
  //console.log(id);
  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "not found"});
      else res.send(data.requestedStudents);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING"});
    });
};

// requested user
exports.updateRequestedUser=(req,res)=>{
  if (!req.body) {
    return res.status(400).send({
      message: "DATA_CANNOT_BE_EMPTY"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, {
    $push: {
      requestedStudents: req.body.requestedStudents
    }
  }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_UPDATE_TUTOR_${id}_MAY_BE_NOT_FOUND!`
        });
      } else res.send({ message: "DETAILS_UPDATED" });
    })
    .catch(err => {
      res.status(500).send({
        message: "ERROR_UPDATING_DETAILS_ID" + id
      });
    });
}

// get requested student array from tutor collection
exports.findRequestedUser=(req,res)=>{
  const id = req.params.id;
  //console.log(id);
  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "not found"});
      else res.send(data.requestedStudents);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "ERROR_RETRIEVING"});
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

// update the booked student array
exports.updateSession = (req, res) => {
  // var bookedStudents=req.body.bookedStudents;
  // res.json("route working")
  if (!req.body) {
    return res.status(400).send({
      message: "DATA_CANNOT_BE_EMPTY"
    });
  }

  const id = req.params.id;
  Tutorial.findByIdAndUpdate(id, {
    $push: {
      bookedStudents: req.body.bookedStudents,
      bookedStudentsEmail: req.body.bookedStudentsEmail
    }
  }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_UPDATE_TUTOR_${id}_MAY_BE_NOT_FOUND!`
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

// Update a requested array with the specified id in the request in requestedStudent array
exports.removeRequestedUser = (req, res) => {
  const id = req.params.id;
  const requestedStudents=req.body.requestedStudents;
  Tutorial.findByIdAndUpdate(id,{ $pull: { requestedStudents: { $in: requestedStudents } } }, { useFindAndModify: false } )
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `CANNOT_REMOVE_${id}_MAY_BE_NOT_FOUND`
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

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Filter the tutor 
exports.filter=(req,res)=>{

  
  var tutoringLevel=req.query.tutoringLevel;
  var availability = req.query.availability;
  var courseOffering=req.query.courseOffering;


  tutorLength=tutoringLevel.length;
  availabilityLength=availability[0].length;
  courseOfferingLength=courseOffering.length;

  // res.json(tutorLength+" "+availabilityLength+" "+courseOfferingLength)

  //all fields available
  if(availability[0].length!=0 && tutoringLevel.length!=0 && courseOffering.length!=0){
   // res.json(tutoringLevel.length)
      Tutorial.find({ $and: [
        //  // { "availability":  ["sunday","monday"] },
        // { "educationLevel": { $in: ["Elementary School","Middle School","High School","College"] } },
      
         { "tutoringLevel": tutoringLevel},
    
         { "availability": { $all: availability } },
      
         { "courseOffering": courseOffering },
      
      ]})
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Not found Tutor with id " + tutoringLevel });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving Tutor with id=" + tutoringLevel });
        });
  }//no fields available
  else if(tutoringLevel.length==0 && availability[0].length==0 && courseOffering.length==0){
    //res.json("no fields")
    Tutorial.find()
      .then(data => {
        if (!data)
          res.status(404).send({ message: "NOT_FOUND" });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "RETRIEVING_ERROR" + tutoringLevel });
      });
    
  }//tutoringLevel and availability available
  else if(tutoringLevel.length!=0 && availability[0].length!=0 && courseOffering.length==0){
    Tutorial.find({
      $and:[
      { "tutoringLevel": tutoringLevel},
      { "availability": { $in: availability } },
    ]
       })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutor with id " + tutoringLevel });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutor with id=" + tutoringLevel });
      });
    
  }//courseOffering and availability available
  else if(tutoringLevel.length==0 && courseOffering.length!=0 && availability[0].length!=0){
    Tutorial.find({
      $and:[
      { "availability": { $in: availability }},
      { "courseOffering": courseOffering },
    ]
       })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutor with id " + tutoringLevel });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutor with id=" + tutoringLevel });
      });
    
  }//courseoffering and tutoringLevel available
  else if(availability[0].length==0 && tutoringLevel.length!=0 && courseOffering.length!=0){
    Tutorial.find({
      $and:[
      { "tutoringLevel": tutoringLevel},
      { "courseOffering": courseOffering },
    ]
       })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutor with id " + tutoringLevel });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutor with id=" + tutoringLevel });
      });
    
  }//tutoringLevel available
 
  else if(courseOffering.length==0 && availability[0].length==0 && tutoringLevel.length!=0){
    Tutorial.find({"tutoringLevel": tutoringLevel})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutor with id " + tutoringLevel });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutor with id=" + tutoringLevel });
      });
    
  }//avalilability available
  else if(courseOffering.length==0 && availability[0].length!=0 && tutoringLevel.length==0){
    Tutorial.find({"availability": { $in: availability }})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutor with id " + tutoringLevel });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutor with id=" + tutoringLevel });
      });
    
  }//courseOffering available
  else if(courseOffering.length!=0 && availability[0].length==0 && tutoringLevel.length==0){
    Tutorial.find({"courseOffering": courseOffering })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutor with id " + tutoringLevel });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutor with id=" + tutoringLevel });
      });
    
  }
  
};



  //["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

  //nodemailer calendar
  //Calendar

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';
// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Calendar API.
  authorize(JSON.parse(content), listEvents);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
   const authUrl = oAuth2Client.generateAuthUrl({
     access_type: 'offline',
     scope: SCOPES,
   });
  //  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
   code='4/1AfDhmrgQ9cZ4kX4lrZgVTLBwaf_y2nAqLGRc1FMSAAMcs7PSX-CBx-hJ9-E'
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
global.startTime=""
global.date=""
global.endTime=""
global.tutorName=""
global.url=""
function listEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const events = res.data.items;
    if (events.length) {
      console.log('Upcoming 10 events:');
      events.map((event, i) => {
        const d=event.start.dateTime;
        const e=event.end.dateTime;
        date=d.slice(0,10);
        startTime=d.slice(11,19);
        endTime=e.slice(11,19);
        url=event.description;
        tutorName=event.summary;
        // console.log(date,startTime,endTime)
  
      });
    } else {
      console.log('No upcoming events found.');
    }
  });
}

  exports.nodemailer=function (req, res) {
    var bookedStudentsEmail = req.body.bookedStudentsEmail
    var bookedStudents=req.body.bookedStudents
   // res.send(bookedStudents)
    // var startTime=startTime;
    // var endTime=endTime;
    // var date=date;
    // var url=url;
    console.log(startTime,endTime,date,url)
    bookedStudents.map(updateSchedule)
    function updateSchedule(id){
      var session={
        studentId:id,
        date:date,
        startTime:startTime,
        endTime:endTime,
      }
      console.log(session)
     // res.send(id)
      // if (!req.body) {
      //   return res.send({
      //     // message: "DATA_CANNOT_BE_EMPTY"
      //   });
      // }
    
      studentSchema.findByIdAndUpdate(id, {
        $push: {
          upcomingSession:session
        }
      }, { useFindAndModify: false })
      .then(data => {
        if (!data) {
           res.send("CANNOT_UPDATE_TUTOR_MAY_BE_NOT_FOUND!");
        } else{ 
           res.send("DETAILS_UPDATED");
        }
      })
      .catch(err => {
        // res.send("ERROR_UPDATING_DETAILS_ID");
      });
     
    }

    var url='https://www.google.com';
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'praveendaniel107@gmail.com',
        pass: 'danidt714'
      }
    });
    
     res.send("Success")
     bookedStudentsEmail.map(mailOption)
     function mailOption(recieverEmail)
     {    
      var mailOptions = {
      from: 'praveendaniel107@gmail.com',
      to: recieverEmail,
      subject: 'Welcome to VTS Classroom',
      text: 'Greetings from VTS',
      url: url,
      
      attachments: [
        {
          filename: 'mailtrap.png',
          path: __dirname + '/mailtrap.png',
          cid: 'uniq-mailtrap.png' 
        }
      ],
     html: '<b>Hey there! </b><br><img src="cid:uniq-mailtrap.png" alt="mailtrap" /><br>Date Of your class: '+date+'<br> StartTime of your class: '+startTime +'<br>EndTime of your class: '+endTime +'<br>Class Link: '+url+'',
      
    };
    //console.log(obj.date,obj.startTime);
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })};
    }

  // // Posting nodemailer data
  // exports.postUpcomingSession=(req,res)=>{
  //   Tutorial.
  // }

  // // Retrieving nodemailer data
  // exports.postUpcomingSession=(req,res)=>{
  //   Tutorial.
  // }