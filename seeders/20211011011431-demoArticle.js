'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Article', [{
      name: "L'article qui défonce tout",
      userId: 1
    },
    {
      name: "Le deuxième article un peu bof"
    }
  ])

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Article', null);

  }
};
