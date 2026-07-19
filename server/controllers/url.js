const { shortId } = require("shortid")
const URL = require("../models/urls")
const shortid = require("shortid")

async function handleGeneratenewShortURl(req, res) {
       const body = req.body
       if (!body.url) {
              return res.status(400).json({ eroor: "Url is require" })
       }
       // check first is short id is alredy exist for url
       const isExist = await URL.findOne({
              redirectUrl: body.url,
       });

       if (isExist) {
              return res.json({
                     duplicate: true,
                     shortId: isExist.shortId,
                     redirectUrl: isExist.redirectUrl,
                     createdAt: isExist.createdAt,
                     updatedAt: isExist.updatedAt,
              });
       }

       // if new url create new shortId
       const shortId = shortid(8)

       let result = await URL.create({
              shortId: shortId,
              redirectUrl: body.url,
              visitHistory: []
       })

       return res.json(result)
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