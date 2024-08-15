import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';

const app = express();

dotenv.config(); //INITILIZE

const PORT = 8000;

const username = process.env.DB_USERNAME; //to update credentials hiding from connect string URL and ensure security
const password = process.env.DB_PASSWORD;

Connection( username, password );

//Connection();
app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));