"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Users", "username", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Users", "password", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Users", "createdAt", {
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn("Users", "updatedAt", {
        type: Sequelize.DATE,
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
