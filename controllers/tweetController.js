const Tweet = require("../models/Tweet");

exports.createTweet = async (req, res) => {
  const { text } = req.body;
  const userId = req.user.userId;
  try {
    const tweet = new Tweet({ userId, text });
    await tweet.save();
    res.status(201).json({ message: "Tweet posted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserTimeline = async (req, res) => {
  const userId = req.params.userId;
  try {
    const tweets = await Tweet.find({ userId }).sort({ createdAt: -1 });
    res.json(tweets);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
