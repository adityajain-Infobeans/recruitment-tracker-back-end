module.exports = function (sequelize, DataTypes) {
  const Client = sequelize.define(
    'Client',
    {
      client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      client_name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'ra_clients',
      timestamps: false,
    },
  );

  return Client;
};
