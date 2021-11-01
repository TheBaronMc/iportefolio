const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    location: { type: String, required: true},
    call: { type: String, required: true},
    email: { type: String, required: true}
});

module.exports = mongoose.model('Contact', contactSchema);