const express = require("express");
const router = express.Router();
require("dotenv").config();
// =====================================================
const topicRouter = require("./modules/topicRouter");
// =====================================================
const api_uri = process.env.PREFIX_API;
const initRouter = (app) => {
   const routes = [
      {
         path: "topic",
         router: topicRouter,
      },
      // {
      //    path: "user",
      //    router: 'test'
      // }
   ];
   
   routes.forEach((route) => {
      app.use(`${api_uri}/${route.path}`, route.router);
   });
};

module.exports = initRouter;
