var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var _ = require('lodash');

var Blogs = require('../models/Blogs');

router.get('/', function(req, res) {
  Blogs.findBlogs(function(err, tweets) {
    if (err) {
      utils.sendSuccessResponse(res, { blogs: [] });
    } else {
      utils.sendSuccessResponse(res, { blogs: blogs });
    }
  });
});

router.get('/add', function(req, res) {
   	utils.sendSuccessResponse(res, {});
});

module.exports = router;