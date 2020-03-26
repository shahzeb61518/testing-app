const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoLink: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
