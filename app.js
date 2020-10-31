const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// create routes 

app.get('/',(req,res) => {
    res.status(200).send('Techphantoms API');
})


module.exports = app