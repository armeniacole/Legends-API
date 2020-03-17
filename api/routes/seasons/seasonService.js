const Season = require("./seasonModel");

exports.listSeasons = async () => {
  try {
    const seasons = await Season.find({});
    return seasons;
  } catch (e) {
    throw e;
  }
};