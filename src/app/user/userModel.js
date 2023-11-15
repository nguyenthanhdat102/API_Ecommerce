const mongoose = require("mongoose");
// =====================================================
const userSchema = mongoose.Schema(
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
            _id: {
               type: mongoose.Schema.Types.ObjectId,
               index: true,
               required: true,
               auto: true,
            },
            locate: { type: String, required: true },
            active: { type: Boolean, default: false },
         },
      ],
      role: { type: String, enum: ["admin", "user"], required: true },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("User", userSchema);
