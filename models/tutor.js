module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        // phoneNumber:{
        //   type:Number,
        //   // required:true,
        //   // unique:true
        // },

        userType:{
          type:String,
          default:"tutor"
        },

        name:{
          type:String,
          // required:true
        },
        username:{
          type:String,
          // required: true
        },
        email:{
          type:String,
          // required:true,
          unique:true
        },
        gender:{
          type:String,
          // required: true
        },
        password:{
          type:String,
          // required:true,
          // unique:true
        },
        dob:{
          type:String,
          // required:true,
          // unique:true
        },
        collegeName:{
          type:String,
          // required: true
        },
        stream:{
          type:String,
          // required: true
        },
        degree:{
          type:String,
          // required: true
        },
        moreEducation:[],
        // resume:File,
        organisationName:{
          type:String,
          // required: true
        },
        position:{
          type:String,
          // required: true
        },
        duration:{
          type:String,
          // required: true
        },
        currentlyWorking:{
          type:Boolean,
          // required: true
        },
        description:{
          type:String,
          // required: true
        },
        moreJob:{
          type:[],
          // required: true
        },
        courseOffering:{
          type:String,
          // required: true
        },
        courseDuration:{
          type:String,
          // required: true
        },
        tutoringLevel:{
          type:String,
          // required: true
        },
        moreCourse:[],
        bankName:{
          type:String,
          // required: true
        },
        cardNumber:{
          type:Number,
          // required: true
        },
        CVV:{
          type:Number,
          // required: true
        },
        NameOfCard:{
          type:String,
          // required: true
        },

        //booked students
        bookedStudents:[],
        bookedStudentsEmail:[],
        //time of classes is pending

        // Resume:File,
        availability: [],
        classes:{
          type:Number,
        },
        students:{
          type:Number,
        },
        rating:{
          type:Number,
        },
        fans:{
          type:Number,
        },
        review:{
          type:Number,
        },
        // classFromTime:{
        //   type:Number
        // }

        //filter section

        // educationalLevel:{
        //   type:String
        // },
        payment:{
          type:Number,
        },
        totalClassDuration:{
          type:Number,
        },
        requestedStudents:[]
        // //file and image upload
        // file_path: {
        //   type: String,
        //  // required: true
        // },
        // file_mimetype: {
        //   type: String,
        //  // required: true
        // }
  },
    { timestamps: true }
  );

  // schema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

  const Tutor = mongoose.model("tutorCollection", schema);
  return Tutor;
};
