const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, (_) => {
  console.log(`listening to ${PORT}`);
});
