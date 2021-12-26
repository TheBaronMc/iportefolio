const Jobs = require('../../models/cv/job');

exports.getAllStuff = (req, res, next) => {
    Jobs.find().then(
        (jobs) => {
            res.status(200).json(jobs);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};