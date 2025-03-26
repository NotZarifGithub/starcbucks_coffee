const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const CoffeeShop = sequelize.define(
  "CoffeeShop",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      }
    }
  },
  {
    tableName: "starbucks_coffee_shop",
    timestamps: true
  }
);

module.exports = CoffeeShop;