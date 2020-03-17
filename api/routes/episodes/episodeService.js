const Episode = require("./episodeModel");

exports.listEpisodes = async () => {
  try {
    const episodes = await Episode.find({});
    return episodes;
  } catch (e) {
    throw e;
  }
};