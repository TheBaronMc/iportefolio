const express = require('express');
const router = express.Router();

const workExperienceCtrl = require('../../controllers/cv/workExperience');

router.get('/', workExperienceCtrl.getAllStuff);
//router.post('/', workExperienceCtrl.createThing);
//router.put('/:id', workExperienceCtrl.modifyThing);
//router.delete('/:id', workExperienceCtrl.d);

module.exports = router;