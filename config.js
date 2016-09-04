'use strict';

const nconf = require('nconf');

//Note env variables supercede anything from .file() below
nconf.env()
  .file(`./config/${process.env.NODE_ENV}.json`);

module.exports = function(key){
  return nconf.get(key);
};
