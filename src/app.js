const express = require("express");
const compression = require("compression");
const app = express();

const BookRoutes = require("./routes/BookRoutes");

app.use(compression());

app.use("/api/book", BookRoutes);

module.exports = app;
