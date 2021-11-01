const Language = require('../../models/cv/language');

exports.getAllStuff = (req, res, next) => {
    Language.find().then(
        (languages) => {
            res.status(200).json(languages);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};