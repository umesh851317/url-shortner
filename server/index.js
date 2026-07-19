const express = require("express")
const cors = require("cors");
const { connectMongoDb } = require("./config/db")
const urlRoute = require("./routes/url")
const URL = require("./models/urls")

const app = express()

app.use(cors());
app.use(express.json())     //for passed the body in reques

connectMongoDb("mongodb://127.0.0.1:27017/url-shortner")
       .then(() => { console.log("MongoDB Connected") })
       .catch(err => console.log(err));



app.use("/url", urlRoute)

app.get("/:shortId", async (req, res) => {
       const shortId = req.params.shortId;
       const entry = await URL.findOneAndUpdate({ shortId }, {
              $push: {
                     visitHistory: {
                            timestamp: Date.now()
                     }
              }
       })
       res.redirect(entry.redirectUrl)
})



app.listen(8000, () => { console.log("server start at port 8000") })