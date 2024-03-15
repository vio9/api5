const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title:String,
    src:String,
})

module.exports = mongoose.model('Video', videoSchema);