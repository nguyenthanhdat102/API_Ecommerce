const ProductDetail = require("../model/productDetailModel");
const respond = require("../../../helper/response");

const productDetailController = {
   //[GET] ALL PRODUCT TYPE
   getAllProductType: async (req, res) => {
      const { productId } = req.params;
      try {
         const productsType = await ProductDetail({ product_id: productId });
         const countProductType = await ProductDetail.countDocuments({
            product_id: productId,
         });
         if (!productsType) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, null, null, {
            productsType,
            total: countProductType,
         });
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },
   //[GET] A PRODUCT TYPE
   getProductType: async (req, res) => {
      const { productId } = req.params;
      const { productTypeId } = req.query;
      try {
         const productType = await ProductDetail({
            _id: productTypeId,
            product_id: productId,
         });
         if (!productType) {
            return respond(
               res,
               404,
               null,
               "Không tìm thấy sản phẩm hoặc loại sản phẩm"
            );
         }
         return respond(res, 200, null, null, productType);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },

   //[POST] CREATE PRODUCT TYPE
   createProductType: async (req, res) => {
      const {
         typeName,
         regularPrice,
         salePrice,
         sizeName,
         width,
         height,
         weight,
      } = req.body;
      const { productId } = req.params;
      try {
         const newProductType = await ProductDetail.create({
            product: productId,
            typeName,
            regularPrice,
            salePrice,
         });
         const addSize = await ProductDetail.findOneAndUpdate(
            {
               _id: newProductType._id,
            },
            {
               $push: { size: { sizeName, width, height, weight } },
            },
            { new: true }
         );
         if (!addSize) {
            return respond(res, 404, null, "Không tìm thấy loại sản phẩm");
         }
         return respond(res, 200, "Thêm mới thành công !", null, addSize);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },
};

module.exports = productDetailController;
