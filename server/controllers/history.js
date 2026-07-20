const shortid = require("shortid");
const URL = require("../models/urls")


async function handleHistory(req, res) {
       try {
              const response = await URL.find().sort({ createdAt: -1 });  // sort the latest first
              const history = response.map((url) => ({
                     id: url._id,
                     shortid: url.shortId,
                     redirectUrl: url.redirectUrl,
                     createdAt: url.createdAt,
                     totalClicks: url.visitHistory.length,
                     lastVisit:
                            url.visitHistory.length > 0
                                   ? url.visitHistory[url.visitHistory.length - 1].visitedAt
                                   : null,
              }))

              return res.json(history)
       } catch (error) {
              res.status(500).json({ message: "Something went wrong" });
       }

}

module.exports = {
       handleHistory
}