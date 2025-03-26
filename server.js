require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const coffeeShopRoutes = require('./routes/CoffeeShopRoutes');
const errorHandler = require('./middleware/error.middleware');

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

app.get('/', (req, res) => (
  res.send("TESTINGG")
))

app.use(bodyParser.json());
app.use("/api/coffeeshops", coffeeShopRoutes);

//middleware
app.use(errorHandler);

app.listen(PORT, () => (
  console.log(`Server is running on port ${PORT}`)
))