const express = require("express");
const router = express.Router();
const multer = require("multer");

const checkAuth = require("../middleware/check-auth");
const ProductsController = require("../controllers/productsController")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
})

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router
  .get("/", ProductsController.get_all_products)

  .get("/:productId", ProductsController.get_a_product)

  .post("/", checkAuth, upload.single("productImage"), ProductsController.create_a_product)

  .put("/:productId", checkAuth, ProductsController.edit_a_product)

  .delete("/:productId", checkAuth, ProductsController.delete_a_product);

module.exports = router;
