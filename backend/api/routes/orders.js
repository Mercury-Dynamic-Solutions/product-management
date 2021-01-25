const express = require("express")
const router = express.Router();

const checkAuth = require("../middleware/check-auth")

//Controllers
const OrdersController = require("../controllers/orderController")

router.get("/", checkAuth, OrdersController.get_all_orders)

.get("/:orderId", checkAuth, OrdersController.get_one_order)

.post("/", checkAuth, OrdersController.create_an_order)

.delete("/:orderId", checkAuth, OrdersController.delete_an_order);

module.exports = router;