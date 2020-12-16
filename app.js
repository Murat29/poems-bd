const express = require("express");
const app = express();
const PORT = 3030;
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

app.use(bodyParser.json());
app.use("/", router);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.listen(PORT, (_) => {
  console.log(`listening to ${PORT}`);
});
