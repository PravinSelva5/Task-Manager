// this file will handle the connection logic to the MongoDB database

const mongoose = require('mongoose');


// default port mongoDB runs on is 27017
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then( () => {
    console.log("Connected to MongoDB successfully!");
}).catch( (e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});


// To prevent deprecation warnings
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};