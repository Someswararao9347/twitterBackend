const express = require("express");
const {
  createTweet,
  getUserTimeline,
} = require("../controllers/tweetController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createTweet);
router.get("/:userId/timeline", getUserTimeline);

module.exports = router;
