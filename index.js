function isNumeric(num) {
  return isFinite(num);
}

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.use("/", function(req, res) {
  req.setEncoding('utf8');
  var param = req.path.substr(1);
  var date_string, unix;
  if(!isNumeric(param)){
    date_string = decodeURIComponent(param);
    var date = new Date(date_string);
    var unix = Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/1000;
  }
  else{
    unix = Number(param);
    var date = new Date(unix * 1000);
    var months = ["January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"];
    date_string = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  }
  if(!unix) date_string = null;
  var json = {"unix": unix, "natural": date_string};
  res.json(json);
});

app.listen(process.env.PORT||3000);
