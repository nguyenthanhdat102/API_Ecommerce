const User = require("../app/user/userModel");
const respond = require("../utils/response");

// Middleware để kiểm tra vai trò trước khi thêm mới địa chỉ
const checkAdminRole = async (req, res, next) => {
   const { userId } = req.params; // Lấy userId từ đường dẫn

   try {
      const user = await User.findById(userId);

      if (!user) {
         respond(res, 404, null, "Không tìm thấy người dùng");
      }

      if (user.role === "admin") {
         respond(res, 200, null, "Quản trị viên không được thêm nhiều địa chỉ");
      }
      // Nếu vai trò không phải là admin, tiếp tục xử lý
      next();
   } catch (error) {
      return respond(res, 500, "Internal Server Error", error);
   }
};

module.exports = checkAdminRole;
