const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// create routes 

app.get('/', (req, res) => {
    res.status(200).send('Techphantoms API');
})
// API routes 
const ApiRoute = require('./routes');
app.use('/api', ApiRoute);

module.exports = app