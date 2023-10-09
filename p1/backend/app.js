const express = require('express');
const app = express();

app.use(express.json());

// Import all the routes
const products = require("./routes/products");
const news = require("./routes/news");

app.use('/api/v1', products);
app.use('/api/v1', news);


module.exports = app;