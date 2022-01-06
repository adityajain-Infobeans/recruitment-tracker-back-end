const User = require('./users.model.js');
const Requirement = require('./requirements.model.js');

module.exports = function (sequelize, DataTypes) {
  const UserComments = sequelize.define(
    'UserComments',
    {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment_on: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'user_id',
        },
      },
      comment_requirement: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Requirement,
          key: 'req_id',
        },
      },
    },
    {
      tableName: 'ra_comments',
      timestamps: false,
    },
  );

  return UserComments;
};
