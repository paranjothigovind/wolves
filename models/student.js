module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        // phoneNumber:{
        //   type:Number,
        //   // required: true,
        // //   unique:true
        // },

        userType:{
          type:String,
          default:"student"
        },

        username:{
          type:String,
          // required: true
        },

        email:{
            type:String,
            unique:true,
            // required:true
        },

        password:{
            type:String,
            // required:true
        },
        name:{
          type:String,
          // required: true
        },
        email:{
          type:String,
          unique:true,
          // required: true
        },
        gender:{
          type:String,
          // required: true
        },
        DOB:Date,
        parentDOB:Date,
        schoolName:{
          type:String,
          // required: true
        },
        stream:{
          type:String,
          // required: true
        },
        grade:{
          type:String,
          // required: true
        },
        moreEducation:[],
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
  
        //bookedTutors
        bookedTutors:[],

        studentTransaction:[{
            paymentId:{
              type: String
            },
            tutorId:{
              type:String
            },
            orderId:{
              type : String
            },
            signature:{
            type: String
            },
            class:{
              type:String
            },
            duration:{
              type:Number
            }
        }],
        //time of classes
        upcomingSession:[{
            studentId:String,
            date:String,
            startTime:String,
            endTime:String,
            // url:String,
        }]
  
      },
      { timestamps: true }

    );
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
  
    const Student = mongoose.model("studentCollection", schema);
    return Student;
  };
  
  