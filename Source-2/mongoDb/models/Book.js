const mongoose = require('mongoose');
const Schema = mongoose.Schema;   

// preparing schema
const BookSchema = new Schema({
    
    user_Id:{
        type:mongoose.Schema.Types.ObjectId
        },
    title: {
        type: String,
        required: true
    },

    comments: [{message: String }],
    
    meta: {
        votes: Number,
        favs: Number
    },

    publishedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('book', BookSchema);