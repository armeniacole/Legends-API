const express = require("express");
const router = express.Router();

const Episode = require("./episodeModel");
const { listEpisodes, getEpisodeById } = require("./episodeService");

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

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { params } = req;
      const episode = await getEpisodeById(params.id.toUpperCase());
      res.json({ data: episode });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ message: "internal server error" });
    }
  }) 
    
exports.router = router;