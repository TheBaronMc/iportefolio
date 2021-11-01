const express = require('express');
const router = express.Router();

const languageCtrl = require('../../controllers/cv/language');

router.get('/', languageCtrl.getAllStuff);
//router.post('/', languageCtrl.createThing);
//router.put('/:id', languageCtrl.modifyThing);
//router.delete('/:id', languageCtrl.d);

module.exports = router;