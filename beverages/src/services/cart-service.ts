import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from "../localstorage/cart-repository";
import { BeverageDTO } from "../models/beverage";

export function saveCart(cart: OrderDTO) {
  cartRepository.save(cart);
}

export function getCart(): OrderDTO {
  return cartRepository.get();
}

export function addBeverage(beverage: BeverageDTO) {
  const cart = cartRepository.get();
  const item = cart.items.find((x) => x.beverageId === beverage.id);
  if (!item) {
    const newItem = new OrderItemDTO(
      beverage.id,
      1,
      beverage.name,
      beverage.price,
      beverage.imgUrl
    );
    cart.items.push(newItem);
    cartRepository.save(cart);
  }
}

export function clearCart() {
  cartRepository.clear();
}

export function increaseItem(beverageId: number) {
  const cart = cartRepository.get();
  const item = cart.items.find((x) => x.beverageId === beverageId);
  if (item) {
    item.quantity++;
    cartRepository.save(cart);
  }
}

export function decreaseItem(beverageId: number) {
  const cart = cartRepository.get();
  const item = cart.items.find((x) => x.beverageId === beverageId);
  if (item) {
    item.quantity--;
    if (item.quantity < 1) {
      cart.items = cart.items.filter((x) => x.beverageId !== beverageId);
    }
    cartRepository.save(cart);
  }
}
