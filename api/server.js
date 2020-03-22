const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const { PORT, URL } = require("./utils/constants");

const router = express();

const { router: characterRoutes } = require("./routes/characters/characterRouter");
const { router: seasonRoutes } = require("./routes/seasons/seasonRouter");
const { router: groupRoutes } = require("./routes/groups/groupRouter");
const { router: episodeRoutes } = require("./routes/episodes/episodeRouter");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use("/api/characters", characterRoutes);
router.use("/api/seasons", seasonRoutes);
router.use("/api/groups", groupRoutes);
router.use("/api/episodes", episodeRoutes);

const server = http.createServer(router);
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch(err => console.log(err));

console.log("na")