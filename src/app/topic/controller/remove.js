const topicModel = require("../topicModel");

// REMOVE TOPIC
module.exports = async (req, res) => {
   try {
      const { topicSlug } = req.params;
      await topicModel.updateOne({ slug: topicSlug }, { status: false });
      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            message: "Xoá chủ đề thành công",
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
