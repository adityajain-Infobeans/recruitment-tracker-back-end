const skillSetController = require('../controllers/skillSets.controller.js');

module.exports = [
{
  method: 'GET',
  path: '/skill-set',
  handler: skillSetController.list,
},

{
  method: 'GET',
  path: '/skill-set/{id}',
  handler: skillSetController.get,
},
{
  method: 'POST',
  path: '/skill-set',
  handler: skillSetController.create,
},

{
  method: 'PUT',
  path: '/skill-set/{id}',
  handler: skillSetController.update,
},

{
  method: 'DELETE',
  path: '/skill-set/{id}',
  handler: skillSetController.remove,
}

];
