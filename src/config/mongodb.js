const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Đã kết nối MongoDB !");
   } catch (err) {
      console.error("Lỗi kết nối tới MongoDB:", err);
   }
};

module.exports = connect;
