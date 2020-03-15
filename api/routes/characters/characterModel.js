const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  img_url: String,
  name: String,
  codeNames: Array,
  powerOrSkills: Array,
  groupAffiliations: Array,
  playedBy: String,
  characterType: String,
  seasons: Array,
  species: String,
  status: String,
  showOfOrigin: String,
  originTimePeriod: Number,
  previousProfessions: Array,
  mainWeapon: String,
  relationships: Array,
  originEarth: Number,
  currentEarth: String,
  episodes: Array,
  id: String,
  legendIsActive: Boolean
});

module.exports = mongoose.model("Character", characterSchema);
