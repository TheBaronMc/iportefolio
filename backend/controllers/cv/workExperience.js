const WorkExperience = require('../../models/cv/workExperience');

exports.getAllStuff = (req, res, next) => {
    WorkExperience.find().then(
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