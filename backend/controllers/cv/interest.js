const Interest = require('../../models/cv/interest');

exports.getAllStuff = (req, res, next) => {
    Interest.find().then(
        (interests) => {
            res.status(200).json(interests);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};