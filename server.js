const express = require("express");
const app = express();

app.use("/", (req, res)=>{
    res.send("Home is working");
})

app.listen(5000);