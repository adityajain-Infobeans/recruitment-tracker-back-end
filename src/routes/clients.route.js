const clientController = require('../controllers/clients.controller.js');

module.exports = [
{
  method: 'GET',
  path: '/client',
  handler: clientController.list,
},

{
  method: 'GET',
  path: '/client/{id}',
  handler: clientController.get,
},
{
  method: 'POST',
  path: '/client',
  handler: clientController.create,
},

{
  method: 'PUT',
  path: '/client/{id}',
  handler: clientController.update,
},

{
  method: 'DELETE',
  path: '/client/{id}',
  handler: clientController.remove,
}

];
