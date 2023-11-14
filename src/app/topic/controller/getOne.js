const topicModel = require("../model");

// GET ONE TOPIC
module.exports = async (req, res) => {
   try {
      const { topicSlug } = req.params;
      const topic = await topicModel.findOne({ slug: topicSlug });

      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            data: topic,
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
