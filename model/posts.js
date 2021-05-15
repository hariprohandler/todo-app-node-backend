const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posts = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 3
    }
}, {timestamps: true});

const Post = mongoose.model('Post', posts);
module.exports = Post;