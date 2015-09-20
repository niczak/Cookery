// set NODE_ENV to development unless it is set elsewhere
// for production this is set via heroku config
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// load the config file for the current environment
var config = require('./env/' + process.env.NODE_ENV);

process.env.GATEWAY = config.gateway;

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
