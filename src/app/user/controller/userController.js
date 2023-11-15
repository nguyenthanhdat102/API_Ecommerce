const User = require("../userModel");
const respond = require("../../../utils/response");

module.exports = {
   // GET ALL USER
   getUsers: async (req, res) => {
      try {
         const users = await User.find({});
         respond(res, 200, null, null, users);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },

   // GET USER BY ID
   getUser: async (req, res) => {
      try {
         const { userId } = req.params;
         const user = await User.findById(userId);
         if (!user) {
            respond(res, 400, "Không tìm thấy người dùng");
         }
         respond(res, 200, null, null, user);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },

   //CREATE USER
   createUser: async (req, res) => {
      try {
         const {
            username,
            password,
            email,
            phoneNumber,
            firstName,
            lastName,
            birthday,
            locate,
            role,
         } = req.body;

         //Create user -> push locate
         const newUser = await User.create({
            username,
            password,
            email,
            phoneNumber,
            firstName,
            lastName,
            birthday,
            role,
         });
         await User.updateOne({ username }, { $push: { address: { locate } } });
         respond(res, 200, "Thêm người dùng thành công", null, newUser);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },

   //UPDATE USER
   updateUser: async (req, res) => {
      try {
         const { userId } = req.params;
         const data = req.body;
         const user = await User.findByIdAndUpdate(userId, data);
         if (!user) {
            respond(res, 404, null, "Không tìm thấy người dùng");
         }
         respond(res, 200, "Cập nhật người dùng thành công", null, user);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },

   //DELETE USER
   deleteUser: async (req, res) => {
      const { userId } = req.params;
      try {
         await User.deleteOne({ _id: userId });
         respond(res, 200, "Xoá người dùng thành công");
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },
};
