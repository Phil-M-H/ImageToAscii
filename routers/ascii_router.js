const express = require('express');
const router = express.Router();
const conversion_controller = require('../controllers/conversion_controller');

router.post('./ascii', conversion_controller.convert);

module.exports = router;