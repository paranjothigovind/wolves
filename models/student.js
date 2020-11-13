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
        gender:{
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
          type:[String]
        }
  
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
  
  