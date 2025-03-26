const express = require('express');
const router = express.Router();
const {
  getAllCoffeeShops,
  getCoffeeShopById,
  createCoffeeShop,
  updateCoffeeShop,
  deleteCoffeeShop
} = require('../controller/coffeeShop.controller');

router.get("/", getAllCoffeeShops);
router.get("/:id", getCoffeeShopById);
router.post("/", createCoffeeShop);
router.put("/:id", updateCoffeeShop);
router.delete("/:id", deleteCoffeeShop);

module.exports = router;
