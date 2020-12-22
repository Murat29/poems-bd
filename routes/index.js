const router = require("express").Router();
const { response } = require("express");
const { getPoems } = require("../controllers/poems");
const { getAppeals } = require("../controllers/getAppeals");
const { postappeal } = require("../controllers/postappeal");
router.get("/poems", getPoems);
router.get("/appeals", getAppeals);
router.post("/appeals", postappeal);

module.exports = router;
