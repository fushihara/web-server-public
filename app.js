const express = require("express");
var app = express();
const port = process.env.PORT || 3000
const server = app.listen(port);
app.get("/", function(req, res, next){
  console.log(`アクセスがありました`);
    res.json({status:"動作しています"});
});
