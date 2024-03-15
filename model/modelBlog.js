const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content1: String,
    content2: String,
    content3: String,
    creationDate: { type: Date, default: Date.now },
    image: String,
    legend: String,
    image2: String,
    legend2: String
});

module.exports = mongoose.model('Blog', blogSchema);