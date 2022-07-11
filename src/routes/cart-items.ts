import express from "express";
import { v4 as uuidv4 } from "uuid";
import { cartItems } from "../data/cart";
import { Item } from "../types/item.types";

export const cartRouter = express.Router();
// export default routes;

cartRouter.get("/cart-items", (req, res) => {
  res.json(cartItems);
});

cartRouter.get("/cart-items:id", (req, res) => {
  const item = cartItems.find((itemObject) => itemObject.id === req.params.id);
  res.json(item);
});

cartRouter.post("/", (req, res) => {
  const newItem: Item = { id: uuidv4(), ...req.body };
  cartItems.push(newItem);
  res.json(newItem);
});

cartRouter.put("/:id", (req, res) => {
  const item = cartItems.find(
    (itemObject) => itemObject.id === req.params.id
  ) as Item;
  const itemIndex = cartItems.findIndex((item) => item.id === req.params.id);

  const updatedItem = { ...item, ...req.body };

  cartItems.splice(itemIndex, 1, updatedItem);

  res.json(updatedItem);
});

cartRouter.delete("/:id", (req, res) => {
  const itemIndex = cartItems.findIndex((item) => item.id === req.params.id);
  cartItems.splice(itemIndex, 1);
  res.json({ message: "Item deleted" });
});
