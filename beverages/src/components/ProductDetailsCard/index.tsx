import cocaCola from "../../assets/coca-cola.png";
import ProductCategory from "../ProductCategory";

export default function ProductDetailsCard() {
  return (
    <div className="border border-bec-color-card-border rounded bg-bec-color-card-bg mb-5 p-5 max-w-md mx-auto shadow-lg">
      <div className="p-2.5 flex justify-center border-b border-bec-color-card-border">
        <img
          src={cocaCola}
          alt="Computador"
          className="w-56 h-auto object-contain"
        />
      </div>
      <div className="p-2.5 md:px-5 md:py-2.5">
        <h3 className="text-bec-color-font-secondary text-xl font-bold flex items-center">
          R$ 2,00
        </h3>
        <h4 className="text-bec-color-font-primary text-lg font-semibold shadow-md">
          Coca-Cola
        </h4>
        <p className="text-bec-color-font-primary text-sm my-2.5 bg-gray-100 p-3 rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex flex-wrap justify-center text-center">
          <ProductCategory name="Non alcoholic" />
          <ProductCategory name="Soda" />
        </div>
      </div>
    </div>
  );
}
