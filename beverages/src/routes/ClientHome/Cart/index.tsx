import { useState } from "react";
import * as cartService from "../../../services/cart-service";
import { OrderDTO } from "../../../models/order";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  // Calcula o subtotal somando o preço total de cada item
  const subtotal = cart.items.reduce((acc, item) => {
    return acc + (item.price ?? 0) * (item.quantity ?? 0);
  }, 0);

  function handleClearClick() {
    cartService.clearCart();
    setCart(cartService.getCart());
  }

  function handleIncreaseItem(beverageId: number) {
    cartService.increaseItem(beverageId);
    setCart(cartService.getCart());
  }
  return (
    <main className="bg-bec-color-bg-primary min-h-screen flex justify-center items-center pt-6 pb-28">
      <section
        id="cart-container-section"
        className="bg-bec-color-card-bg shadow-lg rounded-lg p-8 max-w-lg w-full"
      >
        {cart.items.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl font-bold text-bec-color-font-primary mb-4">
              Your cart is empty
            </h2>
            <Link to="/catalog">
              <button className="bg-bec-color-btn-primary text-bec-color-btn-inverse py-3 px-6 rounded shadow hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200">
                Home
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.items.map((item) => {
              const itemTotal = (item.price ?? 0) * (item.quantity ?? 0);
              return (
                <div
                  key={item.beverageId}
                  className="flex flex-col md:flex-row justify-between items-start border-b border-bec-color-card-border pb-6"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-24 h-24 rounded-md"
                    />
                    <div className="ml-6">
                      <h3 className="text-base font-semibold text-bec-color-font-primary">
                        {item.name}
                      </h3>
                      <div className="flex items-center text-lg font-semibold mt-3">
                        <button className="text-bec-color-btn-primary border rounded px-3 py-1 hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200">
                          -
                        </button>
                        <p className="mx-4">{item.quantity}</p>
                        <button
                          onClick={() => handleIncreaseItem(item.beverageId)}
                          className="text-bec-color-btn-primary border rounded px-3 py-1 hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-bec-color-font-primary font-semibold text-lg">
                    R$ {itemTotal.toFixed(2)}
                  </div>
                </div>
              );
            })}

            <div className="py-2 text-right text-bec-color-font-primary">
              <h3 className="font-bold text-2xl">
                Subtotal: R$ {subtotal.toFixed(2)}
              </h3>
            </div>

            <div className="flex justify-between mt-8">
              <button className="bg-bec-color-btn-primary text-bec-color-btn-inverse py-3 px-6 rounded shadow hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200">
                Checkout
              </button>
              <Link to="/catalog">
                <button className="bg-bec-color-card-bg border border-bec-color-card-border text-bec-color-font-primary py-3 px-6 rounded shadow hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200">
                  Keep Buying
                </button>
              </Link>
              <button
                onClick={handleClearClick}
                className="bg-bec-color-card-bg border border-bec-color-card-border text-bec-color-font-primary py-3 px-6 rounded shadow hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
