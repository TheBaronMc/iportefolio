const Description = require('../../models/cv/description');

exports.getAllDescription = (req, res, next) => {
    Description.find().then(
        (descriptions) => {
            res.status(200).json(descriptions);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

