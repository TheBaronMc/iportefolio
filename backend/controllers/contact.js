const Contact = require('../models/contact');

exports.getAllDescription = (req, res, next) => {
    Contact.find().then(
        (contacts) => {
            res.status(200).json(contacts);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

