const express = require("express");
const router = express.Router();

const Character = require("./characterModel");
const { listCharacters } = require("./characterService");

router.route('/')
    .get(async (req, res) => {
        try {
          const characters = await listCharacters();
          res.json({ data: characters });
        } catch (ex) {
          console.log(ex);
          res.status(500).json({ message: "internal server error" });
        }
    })

    
exports.router = router;