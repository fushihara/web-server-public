const express = require("express");
const startUpTime = dateformat();
let accessCount = 0;
const app = express();
const port = process.env.PORT || 3000
const server = app.listen(port);
app.get("/", function(req, res, next){
  accessCount+=1;
  console.log(`アクセスがありました`);
    res.json({status:"動作しています",accessCount,startUpTime,now:dateformat(),});
});


function dateformat(dateObj = new Date(), format = "YYYY-MM-DD HH:mm:ss.SSS") {
  let result = format;
  result = result.replace(/YYYY/g, dateObj.getFullYear().toString());
  result = result.replace(/MM/g, (dateObj.getMonth() + 1).toString().padStart(2, "0"));
  // result = result.replace(/DDD/g, ["日", "月", "火", "水", "木", "金", "土"][dateObj.getDay()]);
  result = result.replace(/DDD/g, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dateObj.getDay()]);
  result = result.replace(/DD/g, dateObj.getDate().toString().padStart(2, "0"));
  result = result.replace(/HH/g, dateObj.getHours().toString().padStart(2, "0"));
  result = result.replace(/mm/g, dateObj.getMinutes().toString().padStart(2, "0"));
  result = result.replace(/ss/g, dateObj.getSeconds().toString().padStart(2, "0"));
  result = result.replace(/SSS/g, dateObj.getMilliseconds().toString().padStart(3, "0"));
  return result;
}
