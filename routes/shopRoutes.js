const {Router} = require("express");
const shopController = require("../controllers/shopController");


const router = Router()

router.get("/shop", shopController.shop_get);
router.post("/shop", shopController.shop_post);
router.get("/shopLivingRoom", shopController.shopLivingRoom_get);
router.get("/shopBedRoom", shopController.shopBedRoom_get);
router.get("/shopKitchen", shopController.shopKitchen_get);
router.post("/shopSearch", shopController.shopSearch_post)

module.exports = router;