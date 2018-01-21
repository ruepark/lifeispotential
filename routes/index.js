var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var _ = require('lodash');

router.get('/', function(req, res) {
	utils.sendSuccessResponse(res, {});
});

module.exports = router;