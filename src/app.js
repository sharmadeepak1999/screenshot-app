const express = require("express")
const path = require("path")

const port = process.env.PORT || 3000

const app = express()

app.use('/',express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("./public/index.html")
})

app.listen(port, (req, res) => {
	console.log(`Server started at port ${port}..`)
})


