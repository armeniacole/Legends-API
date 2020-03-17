const express = require("express");
const router = express.Router();

const Episode = require("./episodeModel");
const { listEpisodes } = require("./episodeService");

router.route('/')
    .get(async (req, res) => {
        try {
          const episodes = await listEpisodes();
          res.json({ data: episodes });
        } catch (ex) {
          console.log(ex);
          res.status(500).json({ message: "internal server error" });
        }
    })

    
exports.router = router;