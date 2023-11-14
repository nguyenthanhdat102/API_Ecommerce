const User = require("./userModel");

module.exports = {
   // GET ALL USER
   getUsers: async (req, res) => {
      try {
         const users = await User.find({});
         return res.status(200).json({
            status: "success",
            code: 200,
            data: {
               data: users,
               //ví dụ còn phân trang ở đây
            },
         });
      } catch (err) {
         return res.status(500).json({
            status: "fail",
            code: 200,
            message: err,
         });
      }
   },
   // GET USER BY ID
   getUser: async (req, res) => {
      try {
         const { userId } = req.params;
         const user = await User.findById(userId);
         if (!user) {
            return res.status(400).json({
               status: "fail",
               code: 400,
               message: "Không tìm thấy người dùng",
            });
         }
         return res.status(200).json({
            status: "success",
            code: 200,
            data: {
               data: user,
            },
         });
      } catch (err) {
         return res.status(500).json({
            status: "fail",
            code: 500,
            message: err,
         });
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

         return res.status(200).json({
            status: "success",
            code: 200,
            data: {
               data: newUser,
               message: "Thêm người dùng thành công !",
            },
         });
      } catch (err) {
         return res.status(500).json({
            status: "fail",
            code: 500,
            message: err,
         });
      }
   },

   //UPDATE USER
   updateUser: async (req, res) => {
      try {
         const { userId } = req.params;
         const user = await User.findByIdAndUpdate(userId, {});
      } catch (err) {
         return res.status(500).json({
            status: "fail",
            code: 500,
            message: err,
         });
      }
   },
};
