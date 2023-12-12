const Post = require("./postModel");
const respond = require("../../helper/response");
// =====================================================
//[GET] Get Posts
const getPosts = async (res, req) => {
   try {
      const posts = await Post.find({});
      const total = await Post.countDocuments();
      return respond(res, 200, null, null, { posts, total });
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[GET] Get Post
const getPost = async (req, res) => {
   const postId = req.params;
   try {
      const post = await Post.findById(postId);
      if (!post) {
         return respond(res, 404, null, "Không tìm thấy bài viết");
      }
      return respond(res, 200, null, null, post);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[POST] Create Post
const createPost = async (req, res) => {
   const data = req.body;
   try {
      const newPost = await Post.create(data);
      return respond(
         res,
         200,
         "Thêm mới bài viết thành công !",
         null,
         newPost
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[PUT] Update Post
const updatePost = async (req, res) => {
   const data = req.body;
   const postId = req.params;
   try {
      const updatePost = await Post.findByIdAndUpdate(
         postId,
         data,
         { new: true }
      );
      if (!updatePost) {
         return respond(res, 404, null, "Không tìm thấy bài viết");
      }
      return respond(
         res,
         200,
         "Cập nhật bài viết thành công !",
         null,
         updatePost
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[DELETE] Delete Post
const deletePost = async (req, res) => {
   const postId = req.params;
   try {
      const deletePost = await Post.findByIdAndDelete(postId);
      if (!deletePost) {
         return respond(res, 404, null, "Không tìm thấy bài viết");
      }
      return respond(
         res,
         200,
         "Xoá bài viết thành công !",
         null,
         deletePost
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};
// =====================================================
module.exports = {
   getPost,
   getPosts,
   createPost,
   updatePost,
   deletePost,
};
