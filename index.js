import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './router/route.js';

const app = express();

dotenv.config(); //INITILIZE

 app.use(bodyParser.json({ extended: true }));//to handle post api body content sent form port 3000
 app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', Routes); //no default end point so blank

const PORT = 8000;

const username = process.env.DB_USERNAME; //to update credentials hiding from connect string URL and ensure security
const password = process.env.DB_PASSWORD;

Connection( username, password );

//Connection();
app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));