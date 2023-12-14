var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');
/* GET home page. */
router.get('/', mainController.main);
router.get('/recieveBill', mainController.recieveBill);
router.post('/livetracking',mainController.liveTracking);
module.exports = router;
