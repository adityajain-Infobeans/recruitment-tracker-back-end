var clients = require('./clients.route.js');
var comments = require('./comments.route.js');
var editHistory = require('./editHistory.route.js');
var requirements = require('./requirements.route.js');
var skillSets = require('./skillSets.route.js');
var users = require('./users.route.js');
var userTypes = require('./userTypes.route.js');

module.exports = [].concat(clients, comments, editHistory, requirements, skillSets, users, userTypes);