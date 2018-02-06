var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var _ = require('lodash');

var Blogs = require('../models/Blogs');

router.get('/', function(req, res) {
  Blogs.findBlogs(function(err, blogs) {
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

router.post('/add', function(req, res) {
  Blogs.addBlog({
  	title: req.body.title,
  	tldr: req.body.tldr,
    content: req.body.content,
  }, function(err, newBlog) {
    if (err) {
      if (err.msg) {
        utils.sendErrorResponse(res, 400, err.msg);
      } else {
        utils.sendErrorResponse(res, 500, 'An unknown error occurred.');
      }
    } else {
      utils.sendSuccessResponse(res, newBlog);
    }
  });
});

module.exports = router;