const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const usersRoutes = require("./routes/users")
const errorRoutes = require("./routes/error")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// add static file to route
app.use(express.static(path.join(__dirname, "static")))

app.use("/admin", adminRoutes)
app.use(shopRoutes)
app.use("/users", usersRoutes)
app.use(errorRoutes)

app.listen(3000, () => console.log("Listening on port 3000"))
