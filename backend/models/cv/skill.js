const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    skill: { type: String, required: true},
    example: { type: Array, required: true},
});

module.exports = mongoose.model('Skill', skillSchema);