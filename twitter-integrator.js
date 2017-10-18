const Promise = require('promise');
const twitter = require('./twitter-call.js');
let objData = [];

exports.getTweets = function(){
   return new Promise((resolve, reject) => {
    twitter.searchTweets()
    .then((response) => {
      response.statuses.map((item) => {
        objData.push({'item': item.text, 'name':item.user.name, 
        'username': item.user.screen_name, 'image': item.user.profile_image_url});
      })
      return true;
    })
    .then(() => {  
      resolve(objData);  
    })
    .catch((err) => {
      reject(err);
    });
    objData = [];
  });
}