'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: function(request, reply){
      return reply('this is a book')
    }
  }

];
