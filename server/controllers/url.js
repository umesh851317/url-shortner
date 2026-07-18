const { shortId } = require("shortid")
const URL = require("../models/urls")
const shortid = require("shortid")

async function handleGeneratenewShortURl(req, res) {
       const body = req.body
       if (!body.url) {
              return res.status(400).json({ eroor: "Url is require" })
       }
       const shortId = shortid(8)

       await URL.create({
              shortId: shortId,
              redirectUrl: body.url,
              visitHistory: []
       })

       return res.json({ id: shortId })
}

async function handleGetAnalytics(req, res) {
       const shortId = req.params.shortId;
       const result = await URL.findOne({ shortId })

       return res.json({
              totalClicks: result.visitHistory.length,
              analytics: result.visitHistory
       })
}

module.exports = {
       handleGeneratenewShortURl,
       handleGetAnalytics
}