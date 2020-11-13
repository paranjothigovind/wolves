const dbConfig = require("../config/keys");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutor")(mongoose);
db.studentSchema = require("./student")(mongoose);


module.exports = db;
