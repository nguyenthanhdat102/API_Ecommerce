const slug = require("slug");
// =====================================================
const Banner = require("./bannerModel");
const respond = require("../../helper/response");
// =====================================================
const bannerController = {
   //[GET] GET BRANDS
   getBanners: async (req, res) => {
      try {
         const banners = await Banner.find({});
         const total = await Banner.countDocuments();
         return respond(res, 200, null, null, { banners, total });
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[GET] GET BRAND
   getBanner: async (req, res) => {
      const { bannerId } = req.params;
      try {
         const banner = await Banner.findById(bannerId);
         if (!banner) {
            return respond(res, 404, null, "Không tìm thấy banner");
         }
         return respond(res, 200, null, null, banner);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[POST] CREATE Banner
   createBanner: async (req, res) => {
      const { name } = req.body;
      try {
         const data = {
            name,
            slug: slug(name),
         };
         const newBanner = await Banner.create(data);
         return respond(
            res,
            200,
            "Thêm mới banner thành công !",
            null,
            newBanner
         );
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   //[PUT] UPDATE Banner
   updateBanner: async (req, res) => {
      const { bannerId } = req.params;
      const { name } = req.body;
      try {
         const updateBanner = await Banner.findByIdAndUpdate(
            { _id: bannerId },
            {
               name,
               slug: slug(name),
            },
            { new: true }
         );
         if (!updateBanner) {
            return respond(res, 404, null, "Không tìm thấy banner");
         }
         return respond(res, 200, null, null, updateBanner);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
   // [DELETE] Banner
   deleteBanner: async (req, res) => {
      const { bannerId } = req.params;
      try {
         await Banner.deleteOne({ _id: bannerId });
         return respond(res, 200, "Xoá banner thành công !", null);
      } catch (error) {
         return respond(res, 500, null, error, "Internal Server Error");
      }
   },
};
// =====================================================
module.exports = bannerController;
