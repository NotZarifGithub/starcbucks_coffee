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
      },
      {
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
      },
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
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('starbucks_coffee_shop', {
      name: {
        [Sequelize.Op.in]: [
          "Starbucks - Paradigm Mall",
          "Starbucks - ss2",
          "Starbucks 3 - Two Square",
          "Starbucks - WISMA DAJU",
          "Starbucks - Citta Mall"
        ]
      }
    }, {});
  }
};
