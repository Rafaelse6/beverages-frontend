import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem("com.rafaelsantos.beverageseommerce/Cart", str);
}

export function get(): OrderDTO {
  const str =
    localStorage.getItem("com.rafaelsantos.beverageseommerce/Cart") ||
    '{"items"=[]}';
  return JSON.parse(str);
}
