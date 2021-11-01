const express = require('express');
const router = express.Router();

const jobCtrl = require('../../controllers/cv/job');

router.get('/', jobCtrl.getAllStuff);
//router.post('/', jobCtrl.createThing);
//router.put('/:id', jobCtrl.modifyThing);
//router.delete('/:id', jobCtrl.d);

module.exports = router;