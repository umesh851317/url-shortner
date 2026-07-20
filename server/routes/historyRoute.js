const express = require("express")
const { handleHistory } = require("../controllers/history");
const router = express.Router()

router.get("/", handleHistory)
module.exports = router;