const Interests = require('../../models/cv/interests');

exports.getAllStuff = (req, res, next) => {
    Interests.find().then(
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