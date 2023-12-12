const Ship = require("./shipModel");
const respond = require("../../helper/response");
// =====================================================
//[GET] Get Ships
const getShips = async (res, req) => {
   try {
      const ships = await Ship.find({});
      const total = await Ship.countDocuments();
      return respond(res, 200, null, null, { ships, total });
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[GET] Get Ship
const getShip = async (req, res) => {
   const shipId = req.params;
   try {
      const ship = await Ship.findById(shipId);
      if (!ship) {
         return respond(res, 404, null, "Không tìm thấy loại ship");
      }
      return respond(res, 200, null, null, ship);
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[POST] Create Ship
const createShip = async (req, res) => {
   const data = req.body;
   try {
      const newShip = await Ship.create(data);
      return respond(
         res,
         200,
         "Thêm mới loại ship thành công !",
         null,
         newShip
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[PUT] Update Ship
const updateShip = async (req, res) => {
   const data = req.body;
   const shipId = req.params;
   try {
      const updateShip = await Ship.findByIdAndUpdate(
         shipId,
         data,
         { new: true }
      );
      if (!updateShip) {
         return respond(res, 404, null, "Không tìm thấy loại ship");
      }
      return respond(
         res,
         200,
         "Cập nhật loại ship thành công !",
         null,
         updateShip
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};

//[DELETE] Delete Ship
const deleteShip = async (req, res) => {
   const shipId = req.params;
   try {
      const deleteShip = await Ship.findByIdAndDelete(shipId);
      if (!deleteShip) {
         return respond(res, 404, null, "Không tìm thấy loại ship");
      }
      return respond(
         res,
         200,
         "Xoá loại ship thành công !",
         null,
         deleteShip
      );
   } catch (error) {
      return respond(res, 500, null, error, "Internal Server Error");
   }
};
// =====================================================
module.exports = {
   getShip,
   getShips,
   createShip,
   updateShip,
   deleteShip,
};
