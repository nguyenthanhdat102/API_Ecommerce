const User = require("../userModel");
const respond = require("../../../helper/response");

const addressController = {
   // [GET] ADDRESSES
   getAddresses: async (req, res) => {
      try {
         const { userId } = req.params;
         const user = await User.findById({ _id: userId });
         if (!user) {
            respond(res, 404, null, "Không tìm thấy ID người dùng");
         }
         respond(res, 200, null, null, user.address);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },
   // [GET] ADDRESS
   getAddress: async (req, res) => {
      const { userId, addressId } = req.params;
      try {
         const user = await User.findById({ _id: userId });
         if (!user) {
            respond(res, 404, null, "Không tìm thấy người dùng");
         }

         const address = user.address.find((item) => {
            return item._id.toString() === addressId;
         });

         if (!address) {
            respond(res, 200, null, "Không tìm thấy địa chỉ người dùng");
         }

         respond(res, 200, null, null, address);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },
   // [POST] CREATE ADDRESS
   createAddress: async (req, res) => {
      try {
         const { userId } = req.params;
         const newAddress = req.body;

         const updateAddressUser = await User.findByIdAndUpdate(
            userId,
            { $push: { address: newAddress } },
            { new: true, useFindAndModify: false }
         );

         if (!updateAddressUser) {
            respond(res, 404, null, "Không tìm thấy người dùng");
         }
         respond(res, 200, "Thêm địa chỉ thành công", null, updateAddressUser);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },

   // [PUT] UPDATE ADDRESS
   updateAddress: async (req, res) => {
      const { userId, addressId } = req.params;
      const updateAddress = req.body;
      try {
         const updateUser = await User.findByIdAndUpdate(
            {
               _id: userId,
               "address._id": addressId,
            },
            { $set: { "address.$": updateAddress } },
            { new: true }
         );

         if (!updateUser) {
            respond(res, 404, null, "Không tìm thấy người dùng hoặc địa chỉ");
         }

         respond(res, 200, "Cập nhật địa chỉ thành công", null, updateUser);
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },

   // [DELETE] DELETE ADDRESS
   deleteAddress: async (req, res) => {
      const { userId, addressId } = req.params;
      try {
         const updateUser = await User.updateOne(
            { _id: userId },
            { $pull: { address: { _id: addressId } } }
         );

         if (updateUser.modifiedCount === 0) {
            respond(res, 404, null, "Không tìm thấy người dùng hoặc địa chỉ");
         }

         respond(res, 200, "Xoá địa chỉ thành công");
      } catch (err) {
         respond(res, 500, "Internal Server Error", err);
      }
   },
};

module.exports = addressController;
