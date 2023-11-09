const topicModel = require("../models/topic");

const topicController = {
   //GET ALL TOPIC
   getAll: async (req, res) => {
      try {
         const topics = await topicModel.find({});
         res.status(200).json({
            status: "success",
            code: 200,
            data: {
               data: topics,
               //ví dụ còn phân trang ở đây
            },
         });
      } catch (err) {
         res.status(400).json({
            status: "fail",
            code: 400,
            message: err,
         });
      }
   },

   //GET ONE TOPIC
   getOne: async (req, res) => {
      try {
         res.status(200).json({
            status: "success",
            code: 200,
            data: "single topic",
         });
      } catch (err) {
         res.status(200).json({
            status: "fail",
            code: 200,
            message: err,
         });
      }
   },
};

module.exports = topicController;
