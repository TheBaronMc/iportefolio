const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: { type: String, required: true},
    beginDate: { type: Date, required: true},
    endDate: { type: Date, required: false},
    description: { type: String, required: false},
    achievements: { type: Array, required: false}
});

module.exports = mongoose.model('Project', projectSchema);