'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('starbucks_coffee_shop', [
      {
        name: "Starbucks - Paradigm Mall",
        address: "Paradigm Mall GB, 01A & 16, Jalan SS 7/26a, SS7",
        city: "Petaling Jaya",
        state: "Selangor",
        postal_code: "47301",
        longitude: 3.105085,
        latitude: 101.596525,
        phone_number: "0378867076",
        email: "customer@starbucks.com.my",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Starbucks - ss2",
        address: "3, Jalan SS 2/67, SS 2",
        city: "Petaling Jaya",
        state: "Selangor",
        postal_code: "47301",
        longitude: 3.118523,
        latitude: 101.623147,
        phone_number: "0374966056",
        email: "customer@starbucks.com.my",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('starbucks_coffee_shop', {
      name: ["Starbucks 3 - Paradigm Mall", "Starbucks - ss2"]
    });
  }
};
