<<<<<<< HEAD
const Tweet = mongoose.model("Tweets", tweetSchema);
module.exports = Tweet;

const myFirstTweet = {
	title: "First Tweet",
	body: "This is my first tweet",
	author: "Brendan",
};

Tweet.create(myFirstTweet, (error, tweet) => {
	if (error) {
		console.log(error);
	} else {
		console.log(tweet);
	}
	db.close();
});
=======
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
  title: String,
  body: String,
  author: String,
  likes: {type: Number, default: 0},
  sponsored: {type: Boolean, default: false}
}, {timestamps: true})

const Tweet = mongoose.model('Tweets', tweetSchema)
module.exports = Tweet
>>>>>>> 423335af427f47cfcb1248177bd601598834deea
