const Voucher = require("./voucherModel");
const respond = require("../../helper/response");
// =====================================================
//[GET] Get Vouchers
const getVouchers = async (res, req) => {
   try {
      const vouchers = await Voucher.find({});
      const total = await Voucher.countDocuments();
      return respond(res, 200, null, null, { vouchers, total });
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[GET] Get Voucher
const getVoucher = async (req, res) => {
   const voucherId = req.params;
   try {
      const voucher = await Voucher.findById(voucherId);
      if (!voucher) {
         return respond(res, 404, null, "Không tìm thấy mã giảm giá");
      }
      return respond(res, 200, null, null, voucher);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[POST] Create Voucher
const createVoucher = async (req, res) => {
   const data = req.body;
   try {
      const newVoucher = await Voucher.create(data);
      return respond(
         res,
         200,
         "Thêm mới mã giảm giá thành công !",
         null,
         newVoucher
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[PUT] Update Voucher
const updateVoucher = async (req, res) => {
   const data = req.body;
   const voucherId = req.params;
   try {
      const updateVoucher = await Voucher.findByIdAndUpdate(
         voucherId,
         data,
         { new: true }
      );
      if (!updateVoucher) {
         return respond(res, 404, null, "Không tìm thấy mã giảm giá");
      }
      return respond(
         res,
         200,
         "Cập nhật mã giảm giá thành công !",
         null,
         updateVoucher
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[DELETE] Delete Voucher
const deleteVoucher = async (req, res) => {
   const voucherId = req.params;
   try {
      const deleteVoucher = await Voucher.findByIdAndDelete(voucherId);
      if (!deleteVoucher) {
         return respond(res, 404, null, "Không tìm thấy mã giảm giá");
      }
      return respond(
         res,
         200,
         "Xoá mã giảm giá thành công !",
         null,
         deleteVoucher
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};
// =====================================================
module.exports = {
   getVoucher,
   getVouchers,
   createVoucher,
   updateVoucher,
   deleteVoucher,
};
