'use strict';

const Hapi = require('hapi');
const Vision  = require('vision');
const Inert = require('inert');
const HapiSwagger = require('hapi-swagger');
const config = require('./config');
const routes = require('./routes');
const Logger = require('./logger');

const host = config('HOST');
const port = config('PORT');

//create a server with a host and a port
const server = module.exports = new Hapi.Server();

server.connection({
  host: host,
  port: port
});

server.register([
  Vision,
  Inert,
  HapiSwagger
], (error) => {
  if(error){
    Logger.error('Failed loading plugins..');
    process.exit(1);
  }
});

server.bind({
  config: config,
  logger: Logger
});
//Add the route
server.route(routes);

//start the server
Logger.info('Starting server...')
server.start((error) => {
  if(error){
    throw error;
  }
  Logger.info(`Server running at : ${server.info.uri}`);
});

/*
Emitted when a promise is rejected and no error handler attached for it.
*/
process.on('unhandledRejection', (error) =>{
  Logger.error(`Unhandled Rejection ${error}`);
  process.exit(1);
});

/*
Emitted when an exception comes back all way to event loop
*/
process.on('uncaughtException', (error) =>{
  Logger.error(`Uncaught Exception ${error}`);
  process.exit(1);
})
