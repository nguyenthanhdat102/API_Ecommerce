const Product = require("../model/productModel");
const respond = require("../../../helper/response");
const slug = require("slug");
// =====================================================
const productController = {
   // [GET] ALL PRODUCTS
   getProducts: async (req, res) => {
      try {
         const products = await Product.find({ status: true })
            .populate("Category")
            .populate("Brand");
         const countProduct = await Product.countDocuments({ status: true });
         return respond(res, 200, null, null, {
            products,
            total: countProduct,
         });
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   // [GET] A PRODUCT
   getProduct: async (req, res) => {
      const { productId } = req.params;
      try {
         const product = await Product.find({ _id: productId });
         if (!product) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, null, null, product);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   // [POST] A PRODUCT
   createProduct: async (req, res) => {
      const { name, thumbnail, category, brand } = req.body;
      const data = {
         name,
         thumbnail,
         category,
         brand,
         gallery: [],
         slug: slug(name),
      };
      const newProduct = await Product.create(data);
      try {
         return respond(res, 200, null, null, newProduct);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   // [PUT] UPDATE PRODUCT
   updateProduct: async (req, res) => {
      const { productId } = req.params;
      const { name, thumbnail, category, brand, public } = req.body;
      try {
         const data = {
            name,
            category,
            brand,
            public,
            slug: slug(name),
         };
         if (thumbnail) {
            data["thumbnail"] = thumbnail;
         }
         const editProduct = await Product.findOneAndUpdate(
            { _id: productId },
            data,
            { new: true }
         );
         if (!editProduct) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, null, null, editProduct);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[PATCH] REMOVE PRODUCT
   removeProduct: async (req, res) => {
      const { productId } = req.params;
      try {
         const product = await Product.updateOne(
            { _id: productId },
            { status: false }
         );
         if (!product) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, "Xoá sản phẩm thành công !", null, {
            info: product,
         });
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[PATCH] RESTORE PRODUCT
   restoreProduct: async (req, res) => {
      const { productId } = req.params;
      try {
         const product = await Product.updateOne(
            { _id: productId },
            { status: true }
         );
         if (!product) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, "Xoá sản phẩm thành công !", null, {
            info: product,
         });
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[DELETE] DELETE PRODUCT
   deleteProduct: async (req, res) => {
      const { productId } = req.params;
      try {
         const product = await Product.deleteOne({ _id: productId });
         if (!product) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, "Xoá sản phẩm vĩnh viễn thành công !", null, {
            info: product,
         });
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
};
// =====================================================
module.exports = productController;
