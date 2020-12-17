const bd = require("../bd");

const getPoems = (req, res) => {
  const { q, onlyLines } = req.query;
  if (!q && !onlyLines) return res.send(bd);
  const foundPoems = bd.reduce((sum, item) => {
    const text = item.fields.text;
    const hasText = text.includes(q);
    if (!hasText) return sum;
    if (onlyLines) {
      const lines = text.split(/\r?\n/).find((line) => line.includes(q));
      return sum.concat({ text: lines });
    }
    return sum.concat(item);
  }, []);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  res.send(foundPoems[getRandomInt(0, foundPoems.length)]);
};

module.exports = {
  getPoems,
};
