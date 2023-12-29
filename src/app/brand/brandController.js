const slug = require("slug");
// =====================================================
const Brand = require("./brandModel");
const respond = require("../../helper/response");
const paginate = require("../../helper/paginate");
// =====================================================
const brandController = {
   //[GET] GET BRANDS
   getBrands: async (req, res) => {
      const { q, page = 1, pageSize = 5 } = req.query || {};
      const skip = (page - 1) * pageSize;
      try {
         let brands = [];
         let total = 0;
         if (!q) {
            brands = await Brand.find({ status: true })
               .sort({ updatedAt: -1 })
               .skip(skip)
               .limit(parseInt(pageSize));
            total = await Brand.find({ status: true }).countDocuments();
         } else {
            brands = await Brand.find({ name: q, status: true })
               .sort({ updatedAt: -1 })
               .skip(skip)
               .limit(parseInt(pageSize));
            total = await Brand.find({
               name: q,
               status: true,
            }).countDocuments();
         }
         const totalPage = await Math.ceil(total / parseInt(pageSize));
         return respond(res, 200, q, null, {
            brands,
            total,
            totalPage,
            currentPage: parseInt(page),
            pages: paginate(parseInt(page), totalPage),
         });
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[GET] GET BRAND
   getBrand: async (req, res) => {
      const { brandId } = req.params;
      try {
         const brand = await Brand.findById(brandId);
         if (!brand) {
            return respond(res, 404, null, "Không tìm thấy thương hiệu");
         }
         return respond(res, 200, null, null, brand);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[POST] CREATE Brand
   createBrand: async (req, res) => {
      const { name } = req.body;
      try {
         const data = {
            name,
            slug: slug(name),
         };
         const newBrand = await Brand.create(data);
         return respond(
            res,
            200,
            "Thêm mới thương hiệu thành công !",
            null,
            newBrand
         );
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[PUT] UPDATE Brand
   updateBrand: async (req, res) => {
      const { brandId } = req.params;
      const { name } = req.body;
      try {
         const updateBrand = await Brand.findByIdAndUpdate(
            { _id: brandId },
            {
               name,
               slug: slug(name),
            },
            { new: true }
         );
         if (!updateBrand) {
            return respond(res, 404, null, "Không tìm thấy thương hiệu");
         }
         return respond(res, 200, null, null, updateBrand);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   // [DELETE] Brand
   deleteBrand: async (req, res) => {
      const { brandId } = req.params;
      try {
         await Brand.updateOne({ _id: brandId }, { status: false });
         return respond(res, 200, "Xoá thương hiệu thành công !", null);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
};
// =====================================================
module.exports = brandController;
