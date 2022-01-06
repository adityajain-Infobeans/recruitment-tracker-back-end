const commentController = require('../controllers/comments.controller.js');

module.exports = [
{
  method: 'GET',
  path: '/comment',
  handler: commentController.list,
},

{
  method: 'GET',
  path: '/comment/{id}',
  handler: commentController.get,
},
{
  method: 'POST',
  path: '/comment',
  handler: commentController.create,
},

{
  method: 'PUT',
  path: '/comment/{id}',
  handler: commentController.update,
},

{
  method: 'DELETE',
  path: '/comment/{id}',
  handler: commentController.remove,
}

];
