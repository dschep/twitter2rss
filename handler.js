'use strict';

const twitter2rss = require('./twitter2rss.js');

module.exports.twitter2rss = (event, context, callback) => {
  twitter2rss.twitterToRss(event.pathParameters.screenName).then((feed) => {
    const response = {
      statusCode: 200,
      body: feed.xml(),
      headers: {'Content-Type': 'application/rss+xml'},
    };

  callback(null, response);
  })
};
