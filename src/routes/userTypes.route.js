const userTypeController = require('../controllers/userTypes.controller.js');

module.exports = [
{
  method: 'GET',
  path: '/usertype',
  handler: userTypeController.list,
},

{
  method: 'GET',
  path: '/usertype/{id}',
  handler: userTypeController.get,
},
{
  method: 'POST',
  path: '/usertype',
  handler: userTypeController.create,
},

{
  method: 'PUT',
  path: '/usertype/{id}',
  handler: userTypeController.update,
},

{
  method: 'DELETE',
  path: '/usertype/{id}',
  handler: userTypeController.remove,
}

];
