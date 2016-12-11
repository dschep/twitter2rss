const Twitter = require('twitter');
const RSS = require('rss');
const Promise = require('bluebird');


module.exports.twitterToRss = (screenName) => {
  const client = Promise.promisifyAll(new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  }));


  const feed = new RSS({
    title: `Twitter / ${screenName}`,
    site_url: `https://twitter.com/${screenName}`,
  })

  return client.getAsync('statuses/user_timeline', {screen_name: screenName})
   .then((tweets, error) => {
    if (error) {
      feed.item({title: 'Error fetching statuses/user_timeline'})
    } else {
      tweets.forEach((tweet) => feed.item({
        title: tweet.text,
        description: tweet.text,
        url: `https://twitter.com/${screenName}/status/${tweet.id_str}`,
      }))
    }
    return feed;
  });
};
