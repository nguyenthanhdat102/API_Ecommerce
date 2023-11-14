const topicModel = require("../topicModel");

// RESTORE TOPIC
module.exports = async (req, res) => {
   try {
      const { topicSlug } = req.params;
      await topicModel.updateOne({ slug: topicSlug }, { status: true });
      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            message: "Khôi phục chủ đề thành công",
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
