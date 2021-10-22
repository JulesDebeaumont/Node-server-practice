'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('User', [{
      email: 'random@gmail.fr',
      password: 'Changeme'
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('User', null);

  }
};
