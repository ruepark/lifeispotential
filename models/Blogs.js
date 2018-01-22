var mongoose = require('mongoose');

// add comment thread pointer, and likes pointer
var blogSchema = mongoose.Schema({
  title: String,
  tldr: String,
  content: String,
  date: { type: Date, default: Date.now },
});

var blogModel = mongoose.model('Blog', blogSchema);

var Blogs = (function(blogModel) {

  var that = {};

  that.addBlog = function(blog, callback) {
    if (blog.content.length > 0) {
      var blog = new blogModel({
        title: blog.title,
        tldr: blog.tldr,
        content: blog.content,
      });

      blog.save(function(err, newBlog) {
        if (err) callback({ msg: err});
        callback(null, newBlog);
      });
    } else {
      callback({ msg: 'blog must have content'});
    }
  }

  // Exposed function that takes a blogID (as a string) and
  // a callback.
  //
  // Returns a blog if the blog exists, otherwise an error.
  that.findBlog = function(blogId, callback) {
    if (blogId.match(/^[0-9a-fA-F]{24}$/)) {
        blogModel.findOne({ _id: blogId }, function(err, result) {
        if (err) {
          callback({ msg: err });
        }
        if (result !== null) {
          callback(null, result);
        } else {
          callback({ msg: 'No such blog!' });
        }
      });
    } else {
      callback({ msg: 'No such blog!' });
    }
  }

  // Exposed function that takes a callback
  //
  // If there are blogs, return them as an array of blog objects.
  // Otherwise, we return an error.
  that.findBlogs = function(callback) {
    blogModel.find({}).sort('-date').exec(function(err, result) {
      if (err) callback({ msg: err });
      if (result.length > 0) {
        callback(null, result);
      } else {
        callback({ msg: 'No such blogs!'})
      }
    });
  }

  // Exposed function that takes a blogId and a callback.
  //
  // If the blogId exists, we delete the blog corresponding to
  // that Id in the _store. Otherwise, we return an error.
  that.removeBlog = function(blogId, callback) {
    blogModel.findOne({ _id: blogId }, function(err, result) {
      if (err) callback({ msg: err });
      if (result !== null) {
        result.remove();
        callback(null);
      } else {
        callback({ msg: 'No such blog!'});
      }
    });
  }
  
  Object.freeze(that);
  return that;

})(blogModel);

module.exports = Blogs;
