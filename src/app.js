const express = require("express");
const app = express();
const cors = require("cors");
const bodyParse = require("body-parser");
// =====================================================
const initRouter = require("./routes/api");
const connect = require("./config/mongodb");
// =====================================================
app.use(bodyParse.json());
app.use(cors());

// CONNECT DB
connect();
// INIT ROUTER
initRouter(app);

module.exports = app;
