'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "starbucks_coffee_shop", [
      {
        name: "Starbucks - Citta Mall",
        address: "G-15, Citta Mall, Jalan PJU 1a/48, Pusat Perdagangan Dana 1",
        city: "Petaling Jaya",
        state: "Selangor",
        postal_code: "47301",
        longitude: 3.111949,
        latitude: 101.578787,
        phone_number: "0377343151",
        email: "customer@starbucks.com.my",
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("starbucks_coffee_shop", null, {});
  }
};
