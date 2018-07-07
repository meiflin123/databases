var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var query = 'SELECT * FROM messages join users on (messages.userId = users.id)';
      db.connection.query(query, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log(results, 'RESULTS HERE LOOK');
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (callback) {
      var query = 'INSERT INTO messages (text, userId) VALUES (text, userId)';
      db.connection.query(query, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var query = 'SELECT * FROM `users`';
      db.connection.query(query, callback);
    },
    post: function (callback) {
      var query = 'INSERT INTO users (id, username) VALUES (id, username)';
      db.connection.query(query, callback);
    }
  }
};


// this is attempt at index.js - controllers
// var models = require('../models');

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       statusCode = 200;
//       response.writeHead(statusCode, headers);
//       response.end(JSON.stringify(data)); 
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       statusCode = 201;
//       let body = '';
//       request.on('data', (chunk) => {
//         body += chunk;
//       });
//       request.on('end', () => {
//         data.results.push(JSON.parse(body));
//         response.writeHead(statusCode, headers);
//         response.end(JSON.stringify(data));
//         console.log('body', body);
//         console.log('data', data);
//       });
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {},
//     post: function (req, res) {}
//   }
// };

