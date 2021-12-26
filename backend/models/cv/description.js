const mongoose = require('mongoose');

const descriptionSchema = mongoose.Schema({
    content: { type: String, required: true}
}, {collection: 'description'});

module.exports = mongoose.model('Description', descriptionSchema);