const getAppeals = (req, res) => {
  let bdAppeals = require("../bdAppleals");
  return res.send(bdAppeals);
};

module.exports = {
  getAppeals,
};
