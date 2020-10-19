const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const postRoutes = require("./routes/postMessage.route");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api", postRoutes);

module.exports = app;
