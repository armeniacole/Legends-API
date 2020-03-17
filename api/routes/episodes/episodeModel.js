const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    id: String,
    airDate: String,
    season: String,
    title: String,
    timePeriods: Array,
    description: String,
    episodeNumber: Number,
    show: String
});

module.exports = mongoose.model("Episode", episodeSchema);