import dotenv from 'dotenv'
require('dotenv').config();


dotenv.config()

// const DB_URL = `${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_DBNAME}`;
const PORT = process.env.PORT;
const DB_HOST = `${process.env.MYSQL_DB_URL}`;
const DB_USER = `${process.env.MYSQLDB_USER}`;
const DB_NAME = `${process.env.MYSQLDB_DATABASE}`;
const DB_PASSWORD = `${process.env.MYSQLDB_ROOT_PASSWORD}`;


export {
  DB_HOST,
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
}