const slug = require("slug");
// =====================================================
const Invoice = require("./invoiceModel");
const respond = require("../../../helper/response");
// =====================================================
const invoiceController = {
   //[GET] GET BRANDS
   getInvoices: async (req, res) => {
      try {
         const invoices = await Invoice.find({}).populate('Supplier');
         const total = await Invoice.countDocuments();
         return respond(res, 200, null, null, { invoices, total });
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[GET] GET BRAND
   getInvoice: async (req, res) => {
      const { invoiceId } = req.params;
      try {
         const invoice = await Invoice.findById(invoiceId);
         if (!invoice) {
            return respond(res, 404, null, "Không tìm thấy đơn nhập hàng");
         }
         return respond(res, 200, null, null, invoice);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[POST] CREATE Invoice
   createInvoice: async (req, res) => {
      const { name } = req.body;
      try {
         const data = {
            name,
            slug: slug(name),
         };
         const newInvoice = await Invoice.create(data);
         return respond(
            res,
            200,
            "Thêm mới đơn nhập hàng thành công !",
            null,
            newInvoice
         );
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[PUT] UPDATE Invoice
   updateInvoice: async (req, res) => {
      const { invoiceId } = req.params;
      const { name } = req.body;
      try {
         const updateInvoice = await Invoice.findByIdAndUpdate(
            { _id: invoiceId },
            {
               name,
               slug: slug(name),
            },
            { new: true }
         );
         if (!updateInvoice) {
            return respond(res, 404, null, "Không tìm thấy đơn nhập hàng");
         }
         return respond(res, 200, null, null, updateInvoice);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   // [DELETE] Invoice
   deleteInvoice: async (req, res) => {
      const { invoiceId } = req.params;
      try {
         await Invoice.deleteOne({ _id: invoiceId });
         return respond(res, 200, "Xoá đơn nhập hàng thành công !", null);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
};
// =====================================================
module.exports = invoiceController;
