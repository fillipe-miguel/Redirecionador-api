const express = require('express');
const router = express.Router();
const linksController = require('../controller/linksController');

router.get('/', linksController.returnAll);

router.post('/', linksController.addLink); 

router.get('/:name', linksController.redirect);

module.exports = router;
