const ProductDetail = require("../model/productDetailModel");
const respond = require("../../../helper/response");

const sizeController = {
   //[GET] ALL PRODUCT TYPE SIZE
   getSizes: async (req, res) => {
      const { productTypeId } = req.query;
      try {
         const productType = ProductDetail.findById({ _id: productTypeId });
         return respond(res, 200, null, null, productType.size);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },
   //[POST] CREATE PRODUCT TYPE SIZE
   createSize: async (req, res) => {
      const data = req.body;
      const { productTypeId } = req.query;
      try {
         const newSize = await ProductDetail.findOneAndUpdate(
            {
               _id: productTypeId,
            },
            {
               $push: { size: data },
            },
            { new: true }
         );
         if (!newSize) {
            return respond(res, 404, null, "Không tìm thấy ");
         }
         respond(res, 200, "Thêm size thành công !", null, newSize);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },

   //[PUT] UPDATE PRODUCT TYPE SIZE
   updateSize: async (req, res) => {
      const data = req.body;
      const { productTypeId, sizeId } = req.query;
      try {
         const updateSize = await ProductDetail.findOneAndUpdate(
            {
               _id: productTypeId,
               "size._id": sizeId,
            },
            { $set: { "address.$": data } },
            { new: true }
         );
         if (!updateSize) {
            return respond(res, 404, null, "Không tìm thấy ");
         }
         respond(res, 200, "Sửa size thành công !", null, updateSize);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },

   //[DELETE] DELETE PRODUCT TYPE SIZE
   deleteSize: async (req, res) => {
      const { productTypeId, sizeId } = req.query;
      try {
         const deleteSize = await ProductDetail.updateOne(
            {
               _id: productTypeId,
            },
            { $pull: { size: { _id: sizeId } } }
         );

         if (deleteSize.modifiedCount === 0) {
            respond(res, 404, null, "Không tìm thấy loại sản phẩm hoặc size đã chọn");
         }

         respond(res, 200, "Xoá size thành công !", null, deleteSize);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },
};

module.exports = sizeController;
