const router = require("express").Router();
const { response } = require("express");
const { getPoems } = require("../controllers/poems");
router.get("/", getPoems);
response.setHeader("Access-Control-Allow-Origin", "*");

module.exports = router;
