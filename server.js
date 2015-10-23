'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/server/config/config');
const searchObj = require('./src/server/services/search');
const search = new searchObj.Search();

var app = express();
app.set('port', config.port);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

// TODO: move to router file
// see: http://expressjs.com/guide/routing.html
app.get('/search/:term', search.doSearch);

app.listen(config.port, () => console.log('Running on ' + config.gateway + ':' + config.port));
