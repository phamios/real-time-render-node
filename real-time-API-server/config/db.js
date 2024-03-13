import mongoose from 'mongoose'
import {DB_URL} from '../config/variables'

// Connect & config Mysql
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "your_user",
  password: "your_password",
  database: "your_database"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});

// end config Mysql 

mongoose.connect(DB_URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}, () => {
  console.log(DB_URL);
  console.log(`DB up and running`);
})