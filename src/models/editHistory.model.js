const User = require('./users.model.js');
const Requirement = require('./requirements.model.js');

module.exports = function (sequelize, DataTypes) {
  const UserType = sequelize.define(
    'UserType',
    {
      edit_history_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      edit_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edit_req_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Requirement,
          key: 'req_id',
        },
      },
      edit_on: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edit_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'user_id',
        },
      },
    },
    {
      tableName: 'ra_usertype',
      timestamps: false,
    },
  );

  return UserType;
};
