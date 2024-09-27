import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import {
  createOrder,
  deleteOrderById,
  getOrderById,
  getOrders,
} from "../models/order.model.js";

const ordersRouter = Router();

ordersRouter.get("/", getOrdersCtrl, getOrders);
ordersRouter.delete("/:id", deleteOrderById);
ordersRouter.get("/:id", getOrderById);
ordersRouter.post("/", createOrderCtrl, createOrder);

export { ordersRouter };
