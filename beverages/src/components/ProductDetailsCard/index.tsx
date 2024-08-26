import { BeverageDTO } from "../../models/beverage";
import ProductCategory from "../ProductCategory";

type Props = {
  beverage: BeverageDTO;
};

export default function ProductDetailsCard({ beverage }: Props) {
  return (
    <div className="border border-bec-color-card-border rounded bg-bec-color-card-bg mb-5 p-5 max-w-md mx-auto shadow-lg">
      <div className="p-2.5 flex justify-center border-b border-bec-color-card-border">
        <img
          src={beverage.imgUrl}
          alt={beverage.name}
          className="w-56 h-auto object-contain"
        />
      </div>
      <div className="p-2.5 md:px-5 md:py-2.5">
        <h3 className="text-bec-color-font-secondary text-xl font-bold flex items-center">
          R$ {beverage.price.toFixed(2)}
        </h3>
        <h4 className="text-bec-color-font-primary text-lg font-semibold shadow-md">
          {beverage.name}
        </h4>
        <p className="text-bec-color-font-primary text-sm my-2.5 bg-gray-100 p-3 rounded-md">
          {beverage.description}
        </p>
        <div className="flex flex-wrap justify-center text-center">
          {beverage.categories.map((item) => (
            <ProductCategory key={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
