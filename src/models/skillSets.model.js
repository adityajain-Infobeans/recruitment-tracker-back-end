module.exports = function (sequelize, DataTypes) {
  const SkillSet = sequelize.define(
    'SkillSet',
    {
      skill_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      skill_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'ra_skill_sets',
      timestamps: false,
    },
  );

  return SkillSet;
};
