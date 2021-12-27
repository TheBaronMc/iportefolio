const express = require('express');
const router = express.Router();

const contactCtrl = require('../controllers/contact');

router.get('/', contactCtrl.getAllDescription);

module.exports = router;