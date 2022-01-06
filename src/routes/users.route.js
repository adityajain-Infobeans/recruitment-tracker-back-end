const userController = require('../controllers/users.controller.js');

module.exports = [
{
  method: 'GET',
  path: '/user',
  handler: userController.list,
},

{
  method: 'GET',
  path: '/user/{id}',
  handler: userController.get,
},
{
  method: 'POST',
  path: '/user',
  handler: userController.create,
},

{
  method: 'PUT',
  path: '/user/{id}',
  handler: userController.update,
},

{
  method: 'DELETE',
  path: '/user/{id}',
  handler: userController.remove,
}

];
