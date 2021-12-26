const Projects = require('../../models/cv/projects');

exports.getAllStuff = (req, res, next) => {
    Projects.find().then(
        (projects) => {
            res.status(200).json(projects);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};