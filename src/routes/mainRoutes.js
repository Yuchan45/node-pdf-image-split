const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Multer
const multipleUpload = require('../middlewares/pdfsMulter');

const { index, processData, processDataRotate } = mainController;

router.get('/', index);
router.post('/processData', processData);
router.post('/processDataRotate', multipleUpload, processDataRotate);


module.exports = router;