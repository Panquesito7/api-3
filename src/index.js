const express = require('express');
const cors = require('cors');
const { port } = require('./config');
const router = require('./router');
const { json } = require('express');



const app = express();
app.use(cors());
app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})