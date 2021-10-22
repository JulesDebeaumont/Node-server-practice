'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Article',
      'userId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
        onDelete: 'SET NULL'
      })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn(
      'Article',
      'userId'
    )
  }
};
