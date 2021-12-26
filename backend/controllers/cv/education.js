const Educations = require('../../models/cv/educations');

exports.getAllStuff = (req, res, next) => {
    Educations.find().then(
        (educations) => {
            res.status(200).json(educations);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};