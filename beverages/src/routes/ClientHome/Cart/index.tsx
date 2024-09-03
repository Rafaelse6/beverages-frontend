const cart = {
  items: [
    {
      beverageId: 4,
      quantity: 1,
      name: "Coca-Cola",
      price: 2,
      imgUrl:
        "https://raw.githubusercontent.com/Rafaelse6/beverages/main/coca-cola.png",
    },
    {
      beverageId: 5,
      quantity: 2,
      name: "Heineken",
      price: 10.0,
      imgUrl:
        "https://raw.githubusercontent.com/Rafaelse6/beverages/main/heineken.png",
    },
  ],
};

export default function Cart() {
  const totalPrice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="bg-bec-color-bg-primary min-h-screen flex justify-center items-center pt-6 pb-28">
      <section
        id="cart-container-section"
        className="bg-bec-color-card-bg shadow-lg rounded-lg p-8 max-w-lg w-full"
      >
        {/* Rendering cart items */}
        {cart.items.map((item) => (
          <div
            key={item.beverageId}
            className="flex flex-col md:flex-row justify-between items-start border-b border-bec-color-card-border pb-6 mb-6"
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
                  <button className="text-bec-color-btn-primary border rounded px-3 py-1 hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-bec-color-font-primary font-semibold text-lg pt-2">
              R$ {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="py-2 text-right text-bec-color-font-primary">
          <h3 className="font-bold text-2xl">R$ {totalPrice.toFixed(2)}</h3>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button className="bg-bec-color-btn-primary text-bec-color-btn-inverse py-3 px-6 rounded shadow hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200">
            Keep Buying
          </button>
          <button className="bg-bec-color-card-bg border border-bec-color-card-border text-bec-color-font-primary py-3 px-6 rounded shadow hover:bg-bec-color-bg-tertiary hover:text-white transition-colors duration-200">
            Proceed to checkout
          </button>
        </div>
      </section>
    </main>
  );
}
