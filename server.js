const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const { PORT, URL } = require("./api/utils/constants");

const router = express();

const { router: characterRoutes } = require("./api/routes/characters/characterRouter");
const { router: seasonRoutes } = require("./api/routes/seasons/seasonRouter");
const { router: groupRoutes } = require("./api/routes/groups/groupRouter");
const { router: episodeRoutes } = require("./api/routes/episodes/episodeRouter");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use("/api/characters", characterRoutes);
router.use("/api/seasons", seasonRoutes);
router.use("/api/groups", groupRoutes);
router.use("/api/episodes", episodeRoutes);

const server = http.createServer(router);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch(err => console.log(err));

  // merge to prod to deploy
// please