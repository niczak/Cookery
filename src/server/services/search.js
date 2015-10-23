'use strict';

const http = require('http');
const config = require('../config/config');
const f2fHost = config.f2fHost;
const f2fPath = config.f2fSearchPath;
const f2fPort = config.f2fPort;
const f2fKey = config.f2fKey;

class Search {
  doSearch (req, res) {
    const searchTerm = req.params.term;
    const encodedTerm = encodeURIComponent(searchTerm);
    const options = {
      host: f2fHost,
      port: f2fPort,
      path: `${f2fPath}?key=${f2fKey}&q=${encodedTerm}`,
      method: 'GET'
    };

    http.request(options, function(f2fres) {
      f2fres.setEncoding('utf8');
      f2fres.on('data', function(data) {
        res.send(data);
      });
    });
    res.end();
  }
}

module.exports.Search = Search;
