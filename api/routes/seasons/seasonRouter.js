const express = require("express");
const router = express.Router();

const Season = require("./seasonModel");
const { listSeasons, getSeasonById } = require("./seasonService");

router.route('/')
    .get(async (req, res) => {
        try {
          const seasons = await listSeasons();
          res.json({ data: seasons });
        } catch (ex) {
          console.log(ex);
          res.status(500).json({ message: "internal server error" });
        }
    })

  router.route('/:id')
  .get(async (req, res) => {
    try {
      const { params } = req;
      const season = await getSeasonById(params.id.toUpperCase());
      res.json({ data: season });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ message: "internal server error" });
    }
  }) 

    
exports.router = router;