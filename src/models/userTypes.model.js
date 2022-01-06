module.exports = function (sequelize, DataTypes) {
  const UserType = sequelize.define(
    'UserType',
    {
      user_type_no: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_type_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'ra_usertype',
      timestamps: false,
    },
  );

  return UserType;
};
