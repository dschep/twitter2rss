# Twitter user RSS feeds

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

A simple port to JS & serverless of
https://github.com/dschep/Twitter-user_timeline.rss-proxy

## Why?
* you like RSS feeds
* you might want to follow some one on twitter with out increasing their follower
  count and bloated ego (ie: [@realDonaldTrump](https://twitter.com/realDonaldTrump))

## Quickstart
First, create a Twitter App & generate Access Tokens - https://apps.twitter.com/

Then create a file called `secrets.json` that contains the keys & secrets you just created:
```
{
  "CONSUMER_KEY": "FROMTWITTER",
  "CONSUMER_SECRET": "FROMTWITTER"
  "ACCESS_TOKEN_KEY": "FROMTWITTER",
  "ACCESS_TOKEN_SECRET": "FROMTWITTER"
}
```

Now deploy the function to AWS Lambda!
```
$ npm install
$ npm run sls deploy
```

Just use the URL in the output of the deploy into an RSS feeder and you're all done!.
Of course, replace `{screenName}` in the URL with a twitter users' screen name :wink:
