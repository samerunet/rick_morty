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
