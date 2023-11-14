const topicModel = require("../topicModel");

// DELETE A TOPIC
module.exports = async (req, res) => {
   try {
      const { topicSlug } = req.params;
      await topicModel.deleteOne({ slug: topicSlug });
      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            message: "Xoá vĩnh viễn chủ đề thành công",
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
