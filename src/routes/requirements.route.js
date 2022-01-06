const requirementController = require('../controllers/requirements.controller.js');

module.exports = [
{
  method: 'GET',
  path: '/requirement',
  handler: requirementController.list,
},

{
  method: 'GET',
  path: '/requirement/{id}',
  handler: requirementController.get,
},
{
  method: 'POST',
  path: '/requirement',
  handler: requirementController.create,
},

{
  method: 'PUT',
  path: '/requirement/{id}',
  handler: requirementController.update,
},

{
  method: 'DELETE',
  path: '/requirement/{id}',
  handler: requirementController.remove,
}

];
