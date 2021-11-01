const express = require('express');
const router = express.Router();

const projectCtrl = require('../../controllers/cv/project');

router.get('/', projectCtrl.getAllStuff);
//router.post('/', projectCtrl.createThing);
//router.put('/:id', projectCtrl.modifyThing);
//router.delete('/:id', projectCtrl.d);

module.exports = router;