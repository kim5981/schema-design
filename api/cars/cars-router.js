const express = require("express")

const router = express.Router()

router.get("/", async (req, res, next) => {
    res.json("get all cars")
})

router.get("/:id", async (req, res, next) => {
    res.json("get car with id")
})

router.post("/", async (req, res, next) => {
    res.json("post car")
})

module.exports = router;