const express = require("express");
const router = express.Router();
require("dotenv").config();
// =====================================================
const topicRouter = require("../app/topic/topicRouter");
const userRouter = require("../app/user/userRouter");
const productRouter = require("../app/product/productRouter");
const categoryRouter = require("../app/category/categoryRouter");
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
      {
         path: "product",
         router: productRouter,
      },
      {
         path: "category",
         router: categoryRouter,
      },
   ];

   routes.forEach((route) => {
      app.use(`${api_uri}/${route.path}`, route.router);
   });
};

module.exports = initRouter;
