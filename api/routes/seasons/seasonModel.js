const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    number: Number,
    id: String,
    numberOfEpisodes: Number,
    year: String,
    goalsAndThemes: Array,
    poster: String,
    description: String,
    show: String
});

module.exports = mongoose.model("Season", seasonSchema);