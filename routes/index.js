const router = require("express").Router();
const { response } = require("express");
const { getPoems } = require("../controllers/poems");
router.get("/", getPoems);

module.exports = router;
