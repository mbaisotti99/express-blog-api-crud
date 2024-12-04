const express = require("express")
const app = express()
const port = 3000

const arr = require("./array")


const routes = require("./routers/routes")

const func = require("./controllers/functions")

app.use("/posts", routes)
app.use(express.static("public"))


app.listen(port, () =>{
    console.log("Server listening");
    
})