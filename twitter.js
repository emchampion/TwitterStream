//twitter.js
var twit = require('twitter'),
    twitter = new twit({
        consumer_key: 'xxxx',//use your own keys
        consumer_secret: 'xxxxx',
        access_token_key: 'xxxx-xxxx',
        access_token_secret: 'xxxxxx',
    });

// twitter.get('/search/tweets.json',
//             {q: '#flyfishing'},
//             function(error, params, response) {});



var util = require('util'),
    tweets = [];

twitter.stream('statuses/sample', {}, function(stream){

    stream.on('data', function(data){
        tweet.push(data);

      });

      setTimeout(function(){
         console.log('Collected ' + tweets.length + ' tweets.');
         stream.destroy();
         process.exit(0);
      }, 5000)
});
