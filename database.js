const mongoose = require('mongoose');

class database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect("mongodb+srv://admin:kKR0ljwtdCgz07TT@twitterclonecluster.o4dla.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch(err => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new database();