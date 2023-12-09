const slug = require("slug");
// =====================================================
const Topic = require("./topicModel");
const respond = require("../../helper/response");
// =====================================================
// [GET] GET TOPICS
const getTopics = async (req, res) => {
   try {
      const topics = await Topic.find({});
      const total = await Topic.countDocuments();
      return respond(res, 200, null, null, { topics, total });
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

// [GET] GET TOPIC
const getTopic = async (req, res) => {
   try {
      const { topicId } = req.params;
      const topic = await Topic.findById(topicId);
      if (!topic) {
         return respond(res, 404, null, "Không tìm thấy chủ đề bài viết");
      }
      return respond(res, 200, null, null, topic);
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

// [POST] CREATE TOPIC
const createTopic = async (req, res) => {
   try {
      const data = {
         name: req.body.name,
         slug: slug(req.body.name),
      };
      const newTopic = await Topic.create(data);
      return respond(res, 200, "Thêm mới chủ đề thành công !", null, newTopic);
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

// [PUT] UPDATE TOPIC
const updateTopic = async (req, res) => {
   try {
      const { topicId } = req.params;
      const data = {
         name: req.body.name,
         slug: slug(req.body.name),
      };
      const updateTopic = await Topic.findByIdAndUpdate(topicId, data, {
         new: true,
      });
      if (!updateTopic) {
         return respond(res, 404, null, "Không tìm thấy chủ đề bài viết");
      }
      return respond(
         res,
         200,
         "Cập nhật chủ đề thành công !",
         null,
         updateTopic
      );
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

const removeTopic = async (req, res) => {
   const { topicId } = req.params;
   try {
      const removeTopic = await Topic.findByIdAndUpdate(
         { _id: topicId },
         { status: false }
      );
      if (!removeTopic) {
         return respond(res, 404, null, "Không tìm thấy chủ đề bài viết");
      }
      return respond(res, 200, "Xoá chủ đề thành công !", null, {
         info: removeTopic,
      });
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

const restoreTopic = async (req, res) => {
   const { topicId } = req.params;
   try {
      const removeTopic = await Topic.findByIdAndUpdate(
         { _id: topicId },
         { status: true }
      );
      if (!removeTopic) {
         return respond(res, 404, null, "Không tìm thấy chủ đề bài viết");
      }
      return respond(res, 200, "Khôi phục chủ đề thành công !", null, {
         info: removeTopic,
      });
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

const deleteTopic = async (req, res) => {
   try {
      const { topicId } = req.params;
      const deleteTopic = await Topic.findByIdAndDelete(topicId);
      if (!deleteTopic) {
         return respond(res, 404, null, "Không tìm thấy chủ đề !");
      }
      return respond(res, 200, "Xoá chủ đề vĩnh viễn thành công !", null, {
         info: deleteTopic,
      });
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

module.exports = {
   createTopic,
   getTopics,
   getTopic,
   updateTopic,
   removeTopic,
   restoreTopic,
   deleteTopic,
};
