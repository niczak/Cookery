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
    console.log('searchTerm', searchTerm);
    const encodedTerm = encodeURIComponent(searchTerm);
    const options = {
      hostname: f2fHost,
      port: f2fPort,
      path: `${f2fPath}?key=${f2fKey}&q=${encodedTerm}`
    };

    const f2freq = http.request(options, function(f2fres) {
      f2fres.setEncoding('utf8');
      f2fres.on('data', function(data) {
//        console.log('data', data);
        res.write(data);
      });
      f2fres.on('end', function () {
//        console.log('end of data');
        res.end();
      });
    });
    f2freq.end();
  }
}

module.exports.Search = Search;
