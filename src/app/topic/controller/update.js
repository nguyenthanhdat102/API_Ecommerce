const topicModel = require("../model");

// UPDATE TOPIC
module.exports = async (req, res) => {
   try {
      const { topicSlug } = req.params;
      const data = {
         name: req.body.name,
         slug: slug(req.body.name),
      };
      await topicModel.updateOne({ slug: topicSlug }, data);
      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            message: "Cập nhật chủ đề thành công",
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
