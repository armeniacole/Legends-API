const Group = require("./groupModel");

exports.listGroups = async () => {
  try {
    const groups = await Group.find({});
    return groups;
  } catch (e) {
    throw e;
  }
};

exports.getGroupById = async (id) => {
  try {
    // use findOne instead of findById so I can have a more user friendly search param
    const group = await Group.findOne({ groupId: id});
    return group;
  } catch(err) {
    throw err;
  }
};