import mongoose from 'mongoose'
import {DB_HOST} from '../config/variables'
import {DB_USER} from '../config/variables'
import {DB_PASSWORD} from '../config/variables'
import {DB_NAME} from '../config/variables'

// Connect & config Mysql
var mysql = require('mysql');
var con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected!!!")
});

// end config Mysql 

// mongoose.connect(DB_URL, {
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// }, () => {
//   console.log(DB_URL);
//   console.log(`DB up and running`);
// })