'use strict';

const Joi = require('joi');
const statusHandler = require('./handlers/status');


module.exports = [
  {
    method: 'GET',
    path: '/status',
    // config: {
    //   validate: {
    //     query: {
    //       humanize: Joi.number()
    //     }
    //   }
    // },
    handler: statusHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: function(request, reply){
      return reply('this is a book')
    }
  }

];
