const express = require("express");
const router = express.Router();
require("dotenv").config();
// =====================================================
const topicRouter = require("../app/topic/topicRouter");
const userRouter = require("../app/user/userRouter");
// =====================================================
const api_uri = process.env.PREFIX_API; // api/v1/
const initRouter = (app) => {
   const routes = [
      {
         path: "topic",
         router: topicRouter,
      },
      {
         path: "user",
         router: userRouter,
      },
   ];

   routes.forEach((route) => {
      app.use(`${api_uri}/${route.path}`, route.router);
   });
};

module.exports = initRouter;
