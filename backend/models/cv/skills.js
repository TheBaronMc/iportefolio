const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema({
    name: { type: String, required: true},
    examples: { type: Array, required: false},
});

module.exports = mongoose.model('Skills', skillsSchema);