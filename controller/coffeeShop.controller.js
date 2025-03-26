const CoffeeShop = require('../models/coffeeShop.model');
const coffeeShopSchema = require('../validators/coffeeShopValidators');

const getAllCoffeeShops = async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.findAll();
    res.status(200).json(coffeeShops);
  } catch (error) {
    next(error);
  }
}

const getCoffeeShopById = async (req, res, next) => {
  try {
    const coffeeShop = await CoffeeShop.findByPk(req.params.id);
    if (!coffeeShop)
      return res.status(404).json({ error: "Not found"});
    res.status(200).json(coffeeShop);
  } catch (error) {
    next(error);
  }
}

const createCoffeeShop = async (req, res, next) => {
  const { error } = coffeeShopSchema.validate(req.body);
  if (error)
    return res.status(400).json({ error: error.details[0].message });
  try {
    const coffeeShop = await CoffeeShop.create(req.body);
    res.status(201).json(coffeeShop);
  } catch (error) {
    next(error);
  }
}

const updateCoffeeShop = async (req, res, next) => {
  try {
    const coffeeShop = await CoffeeShop.findByPk(req.params.id);
    if (!coffeeShop)
      return res.status(404).json({ error: "Not found" });
    const { error } = coffeeShopSchema.validate(req.body)
    if (error)
      return res.status(400).json({ error: error.details[0].message });
    await coffeeShop.update(req.body);
    res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    next(error);
  }
}

const deleteCoffeeShop = async (req, res, next) => {
  try {
    const coffeeShop = await CoffeeShop.findByPk(req.params.id);
    if (!coffeeShop)
      res.status(404).json({ error: "Not found" });
    await coffeeShop.destroy();
    res.status(200).json({ message: "Deleted Sucessfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllCoffeeShops, getCoffeeShopById, createCoffeeShop, updateCoffeeShop, deleteCoffeeShop };