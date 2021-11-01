const mongoose = require('mongoose');

const workExperienceSchema = mongoose.Schema({
    company: { type: String, required: true},
    job: { type: String, required: true },
    location: { type: String, required: true },
    beginDate: { type: Date, required: true},
    endDate: { type: Date, required: false},
    description: { type: String, required: false},
    tasks: { type: Array, required: false}
});

module.exports = mongoose.model('WorkExperience', workExperienceSchema);