import { BeverageDTO } from "../../models/beverage";

type Props = {
  beverage: BeverageDTO;
};

export default function CatalogCard({ beverage }: Props) {
  return (
    <div className="border border-bec-color-card-border rounded bg-bec-color-card-bg mb-4 ml-5 mr-5">
      <div className="border-b border-bec-color-card-border p-4 flex justify-center">
        <img
          src={beverage.imgUrl}
          alt={beverage.name}
          className="w-48 h-auto"
        />
      </div>
      <div className="p-4">
        <h3 className="text-bec-color-font-secondary text-xl font-bold flex items-center">
          R$ {beverage.price.toFixed(2)}
        </h3>
        <h4 className="text-bec-color-font-primary text-lg font-semibold ">
          {beverage.name}
        </h4>
        <p className="text-bec-color-font-primary text-sm my-2.5 bg-gray-100 p-3 rounded-md">
          {beverage.description}
        </p>
      </div>
    </div>
  );
}
