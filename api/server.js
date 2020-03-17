const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const { PORT } = require("./utils/constants");

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
  .connect("mongodb://localhost:27017/LOT", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch(err => console.log(err));

