const Supplier = require("./supplierModel");
const respond = require("../../helper/response");
// =====================================================
//[GET] Get Suppliers
const getSuppliers = async (res, req) => {
   try {
      const suppliers = await Supplier.find({});
      const total = await Supplier.countDocuments();
      return respond(res, 200, null, null, { suppliers, total });
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[GET] Get Supplier
const getSupplier = async (req, res) => {
   const supplierId = req.params;
   try {
      const supplier = await Supplier.findById(supplierId);
      if (!supplier) {
         return respond(res, 404, null, "Không tìm thấy nhà cung cấp");
      }
      return respond(res, 200, null, null, supplier);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[POST] Create Supplier
const createSupplier = async (req, res) => {
   const data = req.body;
   try {
      const newSupplier = await Supplier.create(data);
      return respond(
         res,
         200,
         "Thêm mới nhà cung cấp thành công !",
         null,
         newSupplier
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[PUT] Update Supplier
const updateSupplier = async (req, res) => {
   const data = req.body;
   const supplierId = req.params;
   try {
      const updateSupplier = await Supplier.findByIdAndUpdate(
         supplierId,
         data,
         { new: true }
      );
      if (!updateSupplier) {
         return respond(res, 404, null, "Không tìm thấy nhà cung cấp");
      }
      return respond(
         res,
         200,
         "Cập nhật nhà cung cấp thành công !",
         null,
         updateSupplier
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[DELETE] Delete Supplier
const deleteSupplier = async (req, res) => {
   const supplierId = req.params;
   try {
      const deleteSupplier = await Supplier.findByIdAndDelete(supplierId);
      if (!deleteSupplier) {
         return respond(res, 404, null, "Không tìm thấy nhà cung cấp");
      }
      return respond(
         res,
         200,
         "Xoá nhà cung cấp thành công !",
         null,
         deleteSupplier
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};
// =====================================================
module.exports = {
   getSupplier,
   getSuppliers,
   createSupplier,
   updateSupplier,
   deleteSupplier,
};
