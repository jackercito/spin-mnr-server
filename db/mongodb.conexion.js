const mongoose = require("mongoose");

require('dotenv').config()

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;
const DB = process.env.MONGO_DB;

const uri = "mongodb+srv://" + USER + ":" + PASSWORD + "@" + DB

//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
    if (err) console.log(err);
});

exports.mongoose = mongoose;
