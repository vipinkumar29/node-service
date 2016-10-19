'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routes = require('./routes');
const logger = require('./logger');

const host = config('HOST');
const port = config('PORT');

//create a server with a host and a port
const server = module.exports = new Hapi.Server();

server.connection({
  host: host,
  port: port
});

//Add the route
server.route(routes);

//start the server
server.start((error) => {
  if(error){
    throw error;
  }
  logger.info(`Server running at : ${server.info.uri}`);
});
