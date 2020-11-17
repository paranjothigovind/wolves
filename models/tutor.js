module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        image : {
          type: String
        },
        name:{
          type:String
        },
        email:{
          type:String
        },
        phone:{
          type:Number
        },
        aboutMe:{
          type:String
        },
        city:{
          type:String
        },
        c:{
          type:String
        },
        country:{
          type:String
        },
        company:{
          type:String
        },
        school:{
          type:String
        },
        homeTown:{
          type:String
        },
        languages:{
          type:String
        },
        // courseId:{
        //   type:String
        // },
        // courseName:{
        //   type:String
        // },
        // courseDept:{
        //   type:String
        // },
        // description:{
        //   type:String
        // },
        // courseRoom:{
        //   type:String
        // },
        // waitListCapacity:{
        //   type:Number
        // },
        // courseTeam:{
        //   type:String
        // },
        course: [{
          courseId:{
            type:String
          },
          courseName:{
            type:String
          },
          courseDept:{
            type:String
          },
          description:{
            type:String
          },
          courseRoom:{
            type:String
          },
          waitListCapacity:{
            type:String
          },
          courseTeam:{
            type:String
          },
        }]


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
