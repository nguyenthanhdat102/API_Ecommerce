const express = require("express");
const app = express();
const cors = require("cors");
const bodyParse = require("body-parser");
// =====================================================
const initRouter = require("./routes/api");
const connectDB = require("./config/mongodb");
// =====================================================
app.use(bodyParse.json());
app.use(cors());

// CONNECT DB
connectDB();
// INIT ROUTER
initRouter(app);

module.exports = app;
