const mongoose = require('mongoose');

const workExperiencesSchema = mongoose.Schema({
    company: { type: String, required: true},
    job: { type: String, required: true },
    location: { type: String, required: true },
    beginDate: { type: Date, required: true},
    endDate: { type: Date, required: false},
    description: { type: String, required: false},
    achievements: { type: Array, required: false}
}, {collection: 'workExperiences'});

module.exports = mongoose.model('WorkExperiences', workExperiencesSchema);