const Group = require("./groupModel");

exports.listGroups = async () => {
  try {
    const groups = await Group.find({});
    return groups;
  } catch (e) {
    throw e;
  }
};