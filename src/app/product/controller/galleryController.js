const Product = require("../model/productModel");
const respond = require("../../../helper/response");

const galleryController = {
   //[GET] ALL IMAGE
   getAllImage: async (req, res) => {
      const { productId } = req.params;
      try {
         const product = await Product.findById({ _id: productId });
         if (!product) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, null, null, product.gallery);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },

   //[POST] ADD IMAGE
   addImage: async (req, res) => {
      const { productId } = req.params;
      const data = req.body;
      try {
         const product = await Product.findOneAndUpdate(
            { _id: productId },
            {
               $push: { gallery: data },
            },
            {
               new: true,
            }
         );
         if (!product) {
            return respond(res, 404, null, "Không tìm thấy sản phẩm");
         }
         return respond(res, 200, null, null, product.gallery);
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },

   //[PUT] UPDATE IMAGE
   updateImage: async (req, res) => {
      const { productId } = req.params;
      const { id } = req.query;
      const data = req.body;
      try {
         if (id) {
            const product = await Product.findOneAndUpdate(
               { _id: productId, "gallery._id": id },
               {
                  $set: { "gallery.$": data },
               },
               {
                  new: true,
               }
            );
            if (!product) {
               return respond(res, 404, null, "Không tìm thấy sản phẩm");
            }
            return respond(res, 200, null, null, product.gallery);
         } else {
            return respond(res, 404, null, "Missing query");
         }
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },
   //[DELETE] DELETE IMAGE
   deleteImage: async (req, res) => {
      const { productId } = req.params;
      const { id } = req.query;
      try {
         if (id) {
            const product = await Product.findOneAndUpdate(
               { _id: productId },
               {
                  $pull: { gallery: { _id: id } },
               },
               { new: true }
            );
            if (!product) {
               return respond(res, 404, null, "Không tìm thấy sản phẩm");
            }
            return respond(res, 200, null, null, product.gallery);
         } else {
            return respond(res, 404, null, "Không tìm thấy ảnh");
         }
      } catch (error) {
         return respond(res, 500, "Internal Server Error", error);
      }
   },
};

module.exports = galleryController;
