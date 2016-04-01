var express = require('express');
var app = express();

app.get("/",function(request, response) {
  response.end("Yay! The app works!");
});

app.listen(3000);
