const express = require('express');
const router = express.Router();
const linksController = require('../controller/linksController');

router.get('/', linksController.returnAll);
router.get('/add', linksController.renderAdd);
router.get('/:name', linksController.redirect);
router.get('/edit/:id', linksController.renderEdit);

router.post('/', linksController.addLink);
router.post('/edit/:id', linksController.editLink);

router.delete('/:id', linksController.deleteLink);

module.exports = router;
