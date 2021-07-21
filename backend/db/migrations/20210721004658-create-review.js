'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      comment: {
        type: Sequelize.STRING(140),
        allowNull:false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'Users', key:'id', },
      },
      drinkId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Drinks', key:'id', },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};