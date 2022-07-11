import express from "express";
import { v4 as uuidv4 } from "uuid";
import { cartItems } from "../data/cart";
import { Item } from "../types/item.types";

export const cartRoutes = express.Router();
// export default routes;

cartRoutes.get("/cart-items", (req, res) => {
  res.json(cartItems);
});
