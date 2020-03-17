const express = require("express");
const router = express.Router();

const Group = require("./groupModel");
const { listGroups } = require("./groupService");

router.route('/')
    .get(async (req, res) => {
        try {
          const groups = await listGroups();
          res.json({ data: groups });
        } catch (ex) {
          console.log(ex);
          res.status(500).json({ message: "internal server error" });
        }
    })

    
exports.router = router;