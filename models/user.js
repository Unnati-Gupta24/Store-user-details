const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/stackque");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    imageurl: String
});

module.exports = mongoose.model('user',userSchema);
