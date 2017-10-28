const express = require('express');
const cors = require('cors');
const app = express();
const twitterIntegrator = require('./twitter-integrator.js');

app.use(cors());

app.get('/event-audience', function (req, res) {
    twitterIntegrator.getTweets(req.query.hashtag)
    .then((response) => {
       res.send(response);
    })
    .catch((error) => {
       res.send(error);
    });
});

app.listen(3000, function () {
    console.log('CORS-enabled, web server listening on port 3000');

});