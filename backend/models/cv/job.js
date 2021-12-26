const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    name: { type: String, required: true}
}, {collection: 'job'});

module.exports = mongoose.model('Job', jobSchema);