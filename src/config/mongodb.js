const mongoose = require("mongoose");
require("dotenv").config();
// =====================================================
const connect = async () => {
   const connString = process.env.MONGODB_URI + process.env.DB_NAME;
   try {
      await mongoose.connect(connString);
      console.log("Đã kết nối MongoDB !");
   } catch (err) {
      console.error("Lỗi kết nối tới MongoDB:", err);
   }
};

module.exports = connect;
