const express = require("express");
const router = express.Router();
require("dotenv").config();

const topicRouter = require("./modules/topicRouter");

const api_uri = process.env.PREFIX_API;

const initRouter = (app) => {
   app.use(`${api_uri}/topic`, topicRouter);
};

module.exports = initRouter;
