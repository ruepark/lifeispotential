const BASE_URL = 'http://localhost:3000/blogs';

var request = require('request-promise-native');

export default {
	createBlog : (title, tldr, content) => {
      return request({
        uri : BASE_URL + '/add',
        method: 'POST',
        body: {
        	title: title,
  			tldr: tldr,
          	content: content
        },
        json : true
      });
    },

    getAllBlogs: () => {
      return request({
        uri : BASE_URL,
        method: 'GET',
        json : true
      });
    }
}