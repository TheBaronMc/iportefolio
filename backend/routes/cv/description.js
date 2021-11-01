const express = require('express');
const router = express.Router();

const descriptionCtrl = require('../../controllers/cv/description');

router.get('/', descriptionCtrl.getAllDescription);
//router.post('/', descriptionCtrl.createThing);
//router.put('/:id', descriptionCtrl.modifyThing);
//router.delete('/:id', descriptionCtrl.d);

module.exports = router;