import cocaCola from "../../assets/coca-cola.png";

export default function CatalogCard() {
  return (
    <div className="border border-bec-color-card-border rounded bg-bec-color-card-bg mb-4 ml-5 mr-5">
      <div className="border-b border-bec-color-card-border p-4 flex justify-center">
        <img src={cocaCola} alt="Coca-Cola" className="w-32 h-auto" />
      </div>
      <div className="p-4">
        <h3 className="text-bec-color-font-secondary text-xl font-bold flex items-center">
          R$ 2,00
        </h3>
        <h4 className="text-bec-color-font-primary text-lg font-semibold ">
          Coca-Cola
        </h4>
        <p className="text-bec-color-font-primary text-sm my-2.5 bg-gray-100 p-3 rounded-md">
          Product description
        </p>
      </div>
    </div>
  );
}
