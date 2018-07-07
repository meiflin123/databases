var models = require('../models');

var headers = {  
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var data = {
  results: []
};


module.exports = {
  messages: {
    get: function (req, res) {
      statusCode = 200;
      res.writeHead(statusCode, headers);
      models.messages.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          data.url = '/messages';
          data.method = 'GET';
          data.results = results;
          res.end(JSON.stringify(data));  
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      statusCode = 201;
      res.writeHead(statusCode, headers);
        
      models.messages.post(function(err, results) {
        let body = '';
        request.on('data', (chunk) => {
          body += chunk;
        });
        request.on('end', () => {
          data.results.push(JSON.parse(body));
        // SOMETHING;
        });
      });
    }, // a function which handles posting a message to the database
    options: function (req, res) {
      statusCode = 201;
      res.writeHead(statusCode, headers);
        
      models.messages.post(function(err, results) {
        let body = '';
        request.on('data', (chunk) => {
          body += chunk;
        });
        request.on('end', () => {
          data.results.push(JSON.parse(body));
        // SOMETHING;
        });
      });
    } 
  },
    

  users: {
    // Ditto as above
    get: function (req, res) {
      statusCode = 201;
      res.writeHead(statusCode, headers);
      models.messages.get(function(err, id, username) {
        res.render('chatroom', {
          userId: id,
          username: username
        });  
      });
    },
    post: function (req, res) {
      statusCode = 201;
      let body = '';
      request.on('data', (chunk) => {
        body += chunk;
      });
      request.on('end', () => {
        data.results.push(JSON.parse(body));
        res.writeHead(statusCode, headers);
        models.users.post(function(err, id, username) {
          // SOMETHING;
        });
      });
    }
  }
};

