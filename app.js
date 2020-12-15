const express = require("express");
const app = express();
const PORT = 3030;
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, (_) => {
  console.log(`listening to ${PORT}`);
});
