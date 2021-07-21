'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      as:'user',
      foreignKey:'userId'
    })
    Review.belongsTo(models.Drink, {
      as:'reviews',
      foreignKey:'drinkId'
    })
  };
  return Review;
};