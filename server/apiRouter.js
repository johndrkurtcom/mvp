var Promise = require('bluebird');
var utils = Promise.promisifyAll(require('./utils'));
var apiController = require('./apiController');


module.exports = function(app){
  app.get('/api/events', apiController.eventsRequest);

}

// var eventsRequest = function(request, response){
//   var date = '2015-06-09';
//   response.json({data: processData(date)});
// }


// var processData = function(date){
//   // var results = [];

//   return utils.readJson()
//   .then(function(data){

//     var results = []; 
//     JSON.parse(data).forEach(function(event){
//       if(event.event_start.split(' ')[0] === date){
//         results.push(event);
//       }
//     });

//     return results;
//   });
// }

// eventsRequest();