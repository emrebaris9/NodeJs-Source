const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    
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