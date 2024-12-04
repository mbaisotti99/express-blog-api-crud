const express = require("express")

const router = express.Router()

const funcs = require("../controllers/functions")

module.exports = router 

router.get("/:id", funcs.showId)

router.get("/", funcs.index)

router.delete("/:id", funcs.destroy)