const Skill = require('../../models/cv/skill');

exports.getAllStuff = (req, res, next) => {
    Skill.find().then(
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