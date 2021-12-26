const Skills = require('../../models/cv/skills');

exports.getAllStuff = (req, res, next) => {
    Skills.find().then(
        (skills) => {
            res.status(200).json(skills);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};