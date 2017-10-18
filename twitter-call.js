var Twitter = require('twitter-node-client').Twitter;

//you will create a object config with parameters to access twitter API
const twitter = new Twitter(config);

exports.searchTweets = function () {
  return new Promise((resolve, reject) => {
    twitter.getSearch({ 'q': '#dfne2k17', 'result_type': 'mixed', 'exclude': 'retweets' },
      function (err, response, body) {
        console.log('ERROR Search Twitter API');
        reject(new Error('object failed'));
      },
      function (data) {
        console.log('Data Result');
        const result = JSON.parse(data);
        resolve(result);
      });
  });
}