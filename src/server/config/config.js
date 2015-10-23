// set NODE_ENV to development unless it is set elsewhere
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// load the config file for the current environment
var config = require('./env/' + process.env.NODE_ENV);

process.env.GATEWAY = config.gateway;

// utility method for providing a link based on environment
config.makeLocalLink = function(resource) {
  var gateway = config.gateway;
  var port = config.port;
  var link;
  if (resource[0] != '/') resource = '/' + resource;

  if (process.env.NODE_ENV === 'development') {
    link = gateway + ':' + port + resource;
  } else {
    link = gateway + resource;
  }
  return link;
};

// export config for use elsewhere
module.exports = config;
