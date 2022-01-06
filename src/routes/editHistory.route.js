const editHistoryController = require('../controllers/editHistory.controller.js');

module.exports = [
{
  method: 'GET',
  path: '/edit-history',
  handler: editHistoryController.list,
},

{
  method: 'GET',
  path: '/edit-history/{id}',
  handler: editHistoryController.get,
},
{
  method: 'POST',
  path: '/edit-history',
  handler: editHistoryController.create,
},

{
  method: 'PUT',
  path: '/edit-history/{id}',
  handler: editHistoryController.update,
},

{
  method: 'DELETE',
  path: '/edit-history/{id}',
  handler: editHistoryController.remove,
}

];
