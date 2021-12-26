const Languages = require('../../models/cv/languages');

exports.getAllStuff = (req, res, next) => {
    Languages.find().then(
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