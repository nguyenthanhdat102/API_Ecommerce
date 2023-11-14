const userModel = require("../model");

// GET ALL USER
module.exports = async (req, res) => {
   try {
      const users = await userModel.find({});

      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            data: users,
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
};
