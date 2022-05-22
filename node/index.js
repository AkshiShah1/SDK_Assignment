const express = require("express")
const app = express()
const helmet = require("helmet") 
const cors = require("cors")


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use(helmet())
app.use(cors())

app.use("/s3", require("./routes/routes"))

app.get("/", (req, res) => { 
    res.send("Welcome")
})

app.listen(3500, () => {
    console.log("Listening on port 3500......")
})