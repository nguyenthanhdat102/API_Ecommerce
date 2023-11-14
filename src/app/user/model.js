const mongoose = require("mongoose");

module.exports = mongoose.model(
   "User",
   mongoose.Schema(
      {
         username: { type: String, required: true, unique: true },
         password: { type: String, required: true },
         email: { type: String, required: true, unique: true },
         phoneNumber: { type: String, required: true, unique: true },
         firstName: { type: String, require: true },
         lastName: { type: String, require: true },
         birthday: { type: Date },
         address: [
            {
               locate: String,
               active: Boolean,
            },
         ],
         role: { type: Number, default: 1 }, // 0 admin // 1 user
      },
      {
         timestamps: true,
      }
   )
);
