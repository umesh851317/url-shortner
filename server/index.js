const express = require("express")
const cors = require("cors");
require("dotenv").config();
const { connectMongoDb } = require("./config/db")
const urlRoute = require("./routes/urlRoutes")
const history = require("./routes/historyRoute")
const URL = require("./models/urls")

const app = express()

app.use(cors());
app.use(express.json())     //for passed the body in reques

connectMongoDb(process.env.MONGO_URI)
       .then(() => { console.log("MongoDB Connected....") })
       .catch(err => console.log(err));



app.use("/url", urlRoute)
app.use("/history",history)
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