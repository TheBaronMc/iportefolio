const mongoose = require('mongoose');

const descriptionSchema = mongoose.Schema({
    content: { type: String, required: true}
});

module.exports = mongoose.model('Description', descriptionSchema);