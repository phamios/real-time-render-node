import dotenv from 'dotenv'
require('dotenv').config();


dotenv.config()

const DB_URL = `${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_DBNAME}`;
const PORT = process.env.PORT;

export {
  DB_URL,
  PORT
}