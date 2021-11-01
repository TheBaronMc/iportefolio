const express = require('express');
const router = express.Router();

const skillCtrl = require('../../controllers/cv/skill');

router.get('/', skillCtrl.getAllStuff);
//router.post('/', skillCtrl.createThing);
//router.put('/:id', skillCtrl.modifyThing);
//router.delete('/:id', skillCtrl.d);

module.exports = router;