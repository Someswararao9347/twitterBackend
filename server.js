const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected To MONGODB"))
  .catch((err) => console.log("Failed to Connected With MONGODB", err));

app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/tweets", require("./routes/tweetRoutes"));

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
