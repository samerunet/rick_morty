const mongoose = require('mongoose')
const Tweet = require('./tweet.js')



//'tweets' = the subdata base we will be interacting with!
const mongoURI = 'mongodb://localhost:37017/' + 'tweets'
const db = mongoose.connection

const myFirstTweet = {
  title: 'First Tweet',
  body: 'This is my first tweet',
  author: 'Brendan'
}
//


const manyTweets = [
  {
    title: 'First Tweet',
    body: 'This is my first tweet!',
    author: 'Brendan'
  },
  {
    title: 'Advice',
    body: 'Code Everyday!',
    author: 'Brendan',
    likes: 20
  },
  {
    title: 'WholeFoods',
    body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Brendan',
    likes: 40
  },
  {
    title: 'Organic',
    body: 'I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Brendan',
    likes: 162
  },
  {
    title: 'Confusion',
    body: 'Why do you just respond with the word `dislike`? Surely you mean to click the like button?',
    author: 'Brendan',
    likes: -100
  },
  {
    title: 'Vespa',
    body: 'My Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Brendan',
    likes: 2
  },
  {
    title: 'Licensed',
    body: 'I am now officially licensed to teach yoga. Like this to get 10% off a private lesson',
    author: 'Brendan',
    likes: 3
  },
  {
    title: 'Water',
    body: 'I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Brendan',
  },
];

// Tweet.create(myFirstTweet, (error, tweet) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(tweet)
//   }
//   db.close()
//   })


Tweet.insertMany(manyTweets, (erro, tweets) => {
    if (error {
        console.log(error)
    } else {
        console.log(tweets);
    } db.close()

});

mongoose.connect(mongoURI, () => {
  console.log('the connection is established')
})





// // Connection Error/Success
// // Define callback functions for various events
// db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
// db.on('connected', () => console.log('mongo connected: ', mongoURI))
// db.on('disconnected', () => console.log('mongo disconnected'))