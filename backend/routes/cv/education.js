const express = require('express');
const router = express.Router();

const educationCtrl = require('../../controllers/cv/education');

router.get('/', educationCtrl.getAllStuff);
//router.post('/', descriptionCtrl.createThing);
//router.put('/:id', descriptionCtrl.modifyThing);
//router.delete('/:id', descriptionCtrl.d);

module.exports = router;