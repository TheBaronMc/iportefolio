const express = require('express');
const router = express.Router();

const interestCtrl = require('../../controllers/cv/interest');

router.get('/', interestCtrl.getAllStuff);
//router.post('/', interestCtrl.createThing);
//router.put('/:id', interestCtrl.modifyThing);
//router.delete('/:id', interestCtrl.d);

module.exports = router;