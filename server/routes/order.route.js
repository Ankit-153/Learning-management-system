import express from "express"
import { authorizeRoles, isAuthenticated } from "../middleware/auth.js";
import { createOrder, getAllOrder } from "../controllers/order.controller.js";


const orderRouter = express.Router();

orderRouter.post('/create-order', isAuthenticated, createOrder);
orderRouter.get('/all-orders', isAuthenticated, authorizeRoles("admin"), getAllOrder);

export default orderRouter;