const express = require("express")
const path = require("path")

const router = express.Router()

const rootDir = require("../util/path")
console.log(rootDir)

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/shop", "shop.html"))
})

module.exports = router