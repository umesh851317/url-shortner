const express = require("express")
const { handleGeneratenewShortURl,
       handleGetAnalytics
} = require("../controllers/url")
const router = express.Router()

router.post("/", handleGeneratenewShortURl)

router.get("/analytics/:shortId", handleGetAnalytics)
module.exports = router;