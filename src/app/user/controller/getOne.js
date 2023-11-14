const userModel = require("../model");

// GET A USER
module.exports = async (req, res) => {
   try {
      const { userID } = req.params;
      const user = await userModel.findOne({ _id: userID });

      res.status(200).json({
         status: "success",
         code: 200,
         data: {
            data: user,
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
