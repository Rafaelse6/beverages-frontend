import coke from "../../assets/coca-cola.png";
import ProductCategory from "../ProductCategory";

export default function ProductDetailsCard() {
  return (
    <div className="border border-bec-color-card-border rounded bg-bec-color-card-bg mb-5 max-w-md mx-auto">
      <div className="p-2.5 flex justify-center border-b border-bec-color-card-border">
        <img src={coke} alt="Coca-Cola" className="w-56" />
      </div>
      <div className="p-2.5 md:px-5 md:py-2.5">
        <h3 className="text-bec-color-font-secondary text-lg">R$ 2,00</h3>
        <h4 className="text-bec-color-font-primary text-sm">Coke</h4>
        <p className="text-bec-color-font-primary text-sm my-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex flex-wrap gap-2">
          <ProductCategory />
          <ProductCategory />
        </div>
      </div>
    </div>
  );
}
