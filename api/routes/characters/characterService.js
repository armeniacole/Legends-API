const Character = require("./characterModel");

exports.listCharacters = async () => {
  try {
    const characters = await Character.find({});
    return characters;
  } catch (e) {
    throw e;
  }
};
