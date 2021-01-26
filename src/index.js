const app = require('./server');
const { port, mongo } = require('./config');
const mongoose = require('mongoose');


mongoose.connect(mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => {
        console.log(`server started at port ${port}`)
    });
}).catch(err => {
    console.error(err);
})

