const fs = require("fs").promises;
const path = require("path");

const postappeal = function (req, res) {
  const bdAppeals = path.join(__dirname, "../bdAppleals/bdAppeals.json");

  return fs.readFile(bdAppeals, { encoding: "utf8" }).then((data) => {
    const appeals = JSON.parse(data);
    const newAppeals = [...appeals, req.body];
    return fs.writeFile(bdAppeals, JSON.stringify(newAppeals)).then(() => {
      return res.send(req.body);
    });
  });
};

module.exports = {
  postappeal,
};
