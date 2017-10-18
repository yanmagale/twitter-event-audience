require('dotenv').config()

let Twitter = require('twitter-node-client').Twitter;

const config = {
  "consumerKey": process.env.consumerKey,
  "consumerSecret": process.env.consumerSecret,
  "accessToken": process.env.accessToken,
  "accessTokenSecret": process.env.accessTokenSecret,
  "callBackUrl": process.env.callBackUrl
}

const twitter = new Twitter(config);

exports.searchTweets = function () {
  return new Promise((resolve, reject) => {
    twitter.getSearch({ 'q': process.env.hastag, 'result_type': 'mixed', 'exclude': 'retweets', 'count': 10 },
      function (err, response, body) {
        console.log('ERROR Search Twitter API', err);
        reject(new Error('object failed'));
      },
      function (data) {
        console.log('Data Result');
        const result = JSON.parse(data);
        resolve(result);
      });
  });
}