const topicModel = require("../model");
const slug = require("slug");

// CREATE A TOPIC
module.exports = async (req, res) => {
   try {
      const data = {
         name: req.body.name,
         slug: slug(req.body.name),
      };
      await topicModel.create(data);
      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            message: "Thêm mới chủ đề thành công",
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
