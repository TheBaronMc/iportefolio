const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    phone: { type: String, required: true },
    mail: { type: String, required: true },
    facebook: { type: Object, required: false},
    instagram: { type: Object, required: false},
    linkedin: { type: Object, required: false},
    github: { type: Object, required: false},
}, {collection: 'contact'});

module.exports = mongoose.model('Contact', contactSchema);