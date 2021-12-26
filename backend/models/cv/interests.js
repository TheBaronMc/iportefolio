const mongoose = require('mongoose');

const interestSchema = mongoose.Schema({
    name: { type: String, required: true},
    examples: { type: Array, required: false}
});

module.exports = mongoose.model('Interest', interestSchema);