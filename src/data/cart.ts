import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/item.types";

export const cartItems: Item[] = [
  { id: uuidv4(), product: "turkey bacon", price: 6.95, quantity: 2 },
  { id: uuidv4(), product: "cheese slices", price: 3.95, quantity: 1 },
  { id: uuidv4(), product: "loaf of bread", price: 4.49, quantity: 3 },
];
