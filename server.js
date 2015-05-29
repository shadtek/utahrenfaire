var express = require('express');

var port = process.env.EXPRESS_PORT || 9001;
var app = express();

app.all('*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(port);
