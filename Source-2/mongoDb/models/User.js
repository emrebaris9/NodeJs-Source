const mongoose = require('mongoose');
const Schema = mongoose.Schema;   

// preparing schema
const UserSchema = new Schema({
    
    fullname: {
        type: String,
        required: true
    },    
    age: {
        year: Number,
    },
});

module.exports = mongoose.model('user', UserSchema);