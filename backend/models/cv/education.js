const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
    diploma: { type: String, required: true},
    school: { type: String, required: true },
    location: { type: String, required: true },
    beginDate: { type: Date, required: true},
    endDate: { type: Date, required: false},
    description: { type: String, required: false},
    courses: { type: Array, required: false}
});

module.exports = mongoose.model('Education', educationSchema);