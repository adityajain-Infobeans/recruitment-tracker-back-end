const User = require('./users.model.js');

module.exports = function (sequelize, DataTypes) {
  const Requirement = sequelize.define(
    'Requirement',
    {
      req_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      req_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      req_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      req_position_location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      req_salary_range: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      req_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'user_id',
        },
      },
      req_on: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      req_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'ra_usertype',
      timestamps: false,
    },
  );

  return Requirement;
};
