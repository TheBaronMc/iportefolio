const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    name: { type: String, required: true},
    level: { type: Number, required: true},
    description: { type: String, required : false }
});

module.exports = mongoose.model('Language', languageSchema);