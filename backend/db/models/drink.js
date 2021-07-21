'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Drink.associate = function(models) {
    // associations can be defined here
    Drink.belongsTo(models.User, {
      as:'user',
      foreignKey:'userId'
    })
  };
  return Drink;
};