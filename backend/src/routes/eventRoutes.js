const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/', eventController.createEvent);
router.get('/link/:token', eventController.getEventByToken);

module.exports = router;
