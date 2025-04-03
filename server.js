require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const coffeeShopRoutes = require('./routes/coffeeShop.routes');
const errorHandler = require('./middleware/error.middleware');

const app = express();
const PORT = process.env.SERVER_PORT;

app.get('/', (req, res) => (
  res.send("TESTINGG")
))

//middleware for passing json req
app.use(bodyParser.json());

//routes
app.use("/api/coffeeshops", coffeeShopRoutes);

//middleware for error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

module.exports = app