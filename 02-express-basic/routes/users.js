const express = require("express")
const path = require("path")

const router = express.Router()

const rootDir = require("../util/path")
const { fetchUser } = require("../data")

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/users", "users.html"))
})

router.post("/list", (req, res, next) => {
    const { body } = req

    fetchUser(body.id)
    .then(user => {
        console.log(user)
        res.sendFile(path.join(rootDir, "views/users", "list.html"))
    })
    .catch(err => console.log(err))
})

module.exports = router