const topicModel = require("../topicModel");

// GET ALL TOPIC
module.exports = async (req, res) => {
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
      res.status(200).json({
         status: "fail",
         code: 200,
         message: err,
      });
   }
};
