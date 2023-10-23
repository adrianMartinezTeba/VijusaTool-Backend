const express = require("express")
const RawMaterialController = require("../controllers/RawMaterialController")
const router = express.Router()


router.post("/create",RawMaterialController.createRawMaterial)
router.get("/get",RawMaterialController.getRawMaterials)
router.get("/get/:_id",RawMaterialController.getRawMaterialById)
router.get("/search/:material",RawMaterialController.searchByMaterial)
router.get("/search/:forma",RawMaterialController.searchByShape)
router.put("/update/:_id",RawMaterialController.updateRawMaterial)
router.delete("/delete/:_id",RawMaterialController.deleteRawMaterial)


module.exports = router
