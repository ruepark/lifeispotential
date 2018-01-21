var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');

router.get('/', function(req, res) {
	utils.sendSuccessResponse(res, {});
});

module.exports = router;