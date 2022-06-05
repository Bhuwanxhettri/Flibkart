import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';

const app=express();

dotenv.config();



const PORT=8000; 

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
// connecting to database
Connection(USERNAME,PASSWORD);
// calling express server
app.listen(PORT,()=> console.log(`Server is running successfully on PORT ${PORT} hello`));

DefaultData();