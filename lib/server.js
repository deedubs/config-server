var http = require('http');
var express = require('express');
var app = express();

app.get('/:env', function (req, res) {
  var env = req.params.env;

  res.json({
    name: 'config-server',
    env: env,
    db: 'mongodb://localhost/' + env
  });
});

module.exports = http.createServer(app);
