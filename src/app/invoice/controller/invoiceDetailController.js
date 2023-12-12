const InvoiceDetail = require("../model/invoiceModel");
const respond = require("../../../helper/response");
// =====================================================
// [GET] get all invoiceDetail
const getInvoiceDetails = async (req, res) => {
   const invoiceId = req.params;
   try {
      const invoiceDetails = await InvoiceDetail.find({
         invoice: invoiceId,
      });
      return respond(res, 200, null, null, invoiceDetails);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

// [GET] get a invoiceDetail
const getInvoiceDetail = async (req, res) => {
   const invoiceId = req.params;
   const invoiceDetailId = req.query;
   try {
      const invoiceDetail = await InvoiceDetail.find({
         invoice: invoiceId,
         _id: invoiceDetailId,
      });
      if (!invoiceDetail) {
         return respond(
            res,
            404,
            null,
            "Không tìm thấy chi tiết đơn nhập hàng !"
         );
      }
      return respond(res, 200, null, null, invoiceDetail);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

// [POST] Create invoiceDetail
const createInvoiceDetail = async (req, res) => {
   const invoiceId = req.params;
   const data = req.body;
   try {
      const newInvoiceDetail = await InvoiceDetail.create({
         ...data,
         invoice: invoiceId,
      });
      return respond(
         res,
         200,
         "Thêm mới chi tiết nhập hàng thành công !",
         null,
         newInvoiceDetail
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

// [PUT] Update invoiceDetail
const updateInvoiceDetail = async (req, res) => {
   const invoiceId = req.params;
   const data = req.body;
   try {
      const updateInvoiceDetail = await InvoiceDetail.findByIdAndUpdate(
         invoiceId,
         data,
         { new: true }
      );
      if (!updateInvoiceDetail) {
         return respond(
            res,
            404,
            null,
            "Không tìm thấy chi tiết đơn nhập hàng !"
         );
      }
      return respond(res, 200, null, null, updateInvoiceDetail);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

// [DELETE] Delete invoiceDetail
const deleteInvoiceDetail = async (req, res) => {
   const invoiceId = req.params;
   try {
      const deleteInvoiceDetail = await InvoiceDetail.findByIdAndDelete(invoiceId);
      if (!deleteInvoiceDetail) {
         return respond(
            res,
            404,
            null,
            "Không tìm thấy chi tiết đơn nhập hàng !"
         );
      }
      return respond(res, 200, null, null, deleteInvoiceDetail);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

// =====================================================
module.exports = {
   getInvoiceDetail,
   getInvoiceDetails,
   createInvoiceDetail,
   updateInvoiceDetail,
   deleteInvoiceDetail,
};
