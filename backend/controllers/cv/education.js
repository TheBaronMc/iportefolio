const Education = require('../../models/cv/education');

exports.getAllStuff = (req, res, next) => {
    Education.find().then(
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