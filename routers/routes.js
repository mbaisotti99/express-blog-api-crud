const express = require("express")

const router = express.Router()

const {showId, index, destroy, search} = require("../controllers/functions")

module.exports = router 

router.get("/:id", showId)

router.delete("/:id", destroy)

router.get("/", index)