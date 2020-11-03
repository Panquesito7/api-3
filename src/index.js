const express = require('express');
const { port } = require('./config');
const router = require('./router')



const app = express();

app.use(router)

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})