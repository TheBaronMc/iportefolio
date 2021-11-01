const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.get('/', auth, userCtrl.getAllStuff);
router.post('/', auth, userCtrl.createThing);
router.get('/:id', auth, userCtrl.getOneThing);
router.put('/:id', auth, userCtrl.modifyThing);
router.delete('/:id', auth, userCtrl.d);

module.exports = router;