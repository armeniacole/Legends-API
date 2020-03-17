const Episode = require("./episodeModel");

exports.listEpisodes = async () => {
  try {
    const episodes = await Episode.find({});
    return episodes;
  } catch (e) {
    throw e;
  }
};

exports.getEpisodeById = async (id) => {
  try {
    // use findOne instead of findById so I can have a more user friendly search param
    const episode = await Episode.findOne({ id: id});
    return episode;
  } catch(err) {
    throw err;
  }
};