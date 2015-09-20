var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./src/server/config/config');

var app = express();
app.use(bodyParser.json());
app.set('port', config.port);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist'));
  app.use('/favicon.ico', express.static(__dirname + '/dist/favicon.ico'));
} else {
  app.use(express.static(__dirname + '/src'));
  app.use(express.static(__dirname + '/.tmp'));
  app.use('/bower_components', express.static(__dirname + '/bower_components'));
  app.use('/favicon.ico', express.static(__dirname + '/src/favicon.ico'));
}

app.use('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Cookery in da hizzy\n');
});

app.listen(app.get('port'), function () {
  console.log('Running on ' + config.gateway + ':' + config.port);
});