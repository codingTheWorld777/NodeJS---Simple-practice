const express = require("express")
const path = require("path")

const router = express.Router()

const rootDir = require("../util/path")

// Add a new middleware function
router.get("/add_product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/admin", "add_product.html"))
})

router.post("/product_submit", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

module.exports = router