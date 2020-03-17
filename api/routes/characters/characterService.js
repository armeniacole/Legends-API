const Character = require("./characterModel");

exports.listCharacters = async () => {
  try {
    const characters = await Character.find({});
    return characters;
  } catch (e) {
    throw e;
  }
};

exports.getCharacterById = async (id) => {
  try {
    // use findOne instead of findById so I can have a more user friendly search param
    const character = await Character.findOne({ id: id});
    return character;
  } catch(err) {
    throw err;
  }
};
