const express = require("express");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const { getAllProducts, createProduct ,UpdateProduct, deleteProduct, getProdutDetails, createProductReview, getProductReviews, deleteReview} = require("../Controllers/ProductController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/admin/products/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router.route("/admin/products/:id").put(isAuthenticatedUser,authorizeRoles("admin"),UpdateProduct)
                             .delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
                             

router.route("/product/:id").get(getProdutDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

 
module.exports = router; 