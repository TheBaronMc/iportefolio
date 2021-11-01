const mongoose = require('mongoose');

const shsSchema = mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String, required: true},
    video: { type: String, required: false}
});

module.exports = mongoose.model('Shs', shsSchema);