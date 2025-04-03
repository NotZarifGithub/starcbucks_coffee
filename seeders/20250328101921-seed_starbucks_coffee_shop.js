'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('starbucks_coffee_shop', [
      {
        id: 1,
        name: "Starbucks 3 - Two Square",
        address: "32, No, C-17-01, Dataran, 2, Jalan 19/1",
        city: "Petaling Jaya",
        state: "Selangor",
        postal_code: "46300",
        longitude: 3.111304,
        latitude: 101.632502,
        phone_number: "0379607127",
        email: "customer@starbucks.com.my",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Starbucks - WISMA DAJU",
        address: "G1-4, WISMA DAJU 5, 21, Jalan Barat, Pjs 8",
        city: "Petaling Jaya",
        state: "Selangor",
        postal_code: "46200",
        longitude: 3.101683,
        latitude: 101.640383,
        phone_number: "0350332523",
        email: "customer@starbucks.com.my",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('starbucks_coffee_shop', {
      name: ["Starbucks 3 - Two Square", "Starbucks 3 - WISMA DAJU"]
    })
  }
};
