const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const conversion_controller = require('../controllers/conversion_controller');

router.post('/ascii', upload.single("img"), conversion_controller.convert);

module.exports = router;