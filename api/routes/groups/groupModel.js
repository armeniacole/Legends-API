const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: String,
    currentOrLastActiveLeader: String,
    seasons: Array,
    goal: String,
    groupId: String,
    formerLeaders: Array,
    showOfOrigin: String,
    areVillians: Boolean,
    isActive: Boolean
});

module.exports = mongoose.model("Group", groupSchema);