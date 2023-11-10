const slug = require("slug");
// =====================================================
const topicModel = require("../models/topic");
// =====================================================
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
         res.status(200).json({
            status: "fail",
            code: 200,
            message: err,
         });
      }
   },

   //GET ONE TOPIC
   getOne: async (req, res) => {
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
   },

   //POST TOPIC
   create: async (req, res) => {
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
   },

   //UPDATE TOPIC
   update: async (req, res) => {
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
   },

   //REMOVE TOPIC
   remove: async (req, res) => {
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
   },

   //RESTORE TOPIC
   restore: async (req, res) => {
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
   },

   //DELETE TOPIC
   delete: async (req, res) => {
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
   },
};

module.exports = topicController;
