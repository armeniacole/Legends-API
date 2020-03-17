const Season = require("./seasonModel");

exports.listSeasons = async () => {
  try {
    const seasons = await Season.find({});
    return seasons;
  } catch (e) {
    throw e;
  }
};

exports.getSeasonById = async (id) => {
  try {
    // use findOne instead of findById so I can have a more user friendly search param
    const season = await Season.findOne({ id: id});
    return season;
  } catch(err) {
    throw err;
  }
};