const WorkExperiences = require('../../models/cv/workExperiences');

exports.getAllStuff = (req, res, next) => {
    WorkExperiences.find().then(
        (workExperiences) => {
            res.status(200).json(workExperiences);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};