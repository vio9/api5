const mongoose = require('mongoose');

const ohWowSchema = new mongoose.Schema({
    title: String,
    image: String
})

module.exports = mongoose.model('OhWow', ohWowSchema);