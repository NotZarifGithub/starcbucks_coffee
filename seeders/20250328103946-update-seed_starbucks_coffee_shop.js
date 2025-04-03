'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate('starbucks_coffee_shop',
      {
        name: "Starbucks - Jaya Shopping Centre",
        address: "Lot G-15A & 16, Ground Floor, Jaya Shopping Centre, Section 14",
        city: "Petaling Jaya",
        state: "Selangor",
        postal_code: "46100",
        longitude: 3.109018,
        latitude: 101.636809,
        phone_number: "0374967302",
        email: "customer@starbucks.com.my",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3
      } 
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('starbucks_coffee_shop', 
      {
        name: "Starbucks - Jaya Shopping Centre"
      }
    )
  }
};
