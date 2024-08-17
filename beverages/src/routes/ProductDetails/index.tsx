import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { BeverageDTO } from "../../models/beverage";

const beverage: BeverageDTO = {
  id: 2,
  name: "Sprite",
  description: "This soda is really good",
  imgUrl:
    "https://e7.pngegg.com/pngimages/79/169/png-clipart-sprite-easy-open-can-illustration-sprite-fizzy-drinks-coca-cola-fanta-beverage-can-fanta-food-aluminum-can.png",
  price: 2.0,
  categories: [
    {
      id: 1,
      name: "Soda",
    },
    {
      id: 3,
      name: "Non alcoholic",
    },
  ],
};

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main className="bg-bec-color-bg-primary min-h-screen">
        <section id="product-details-section" className="dsc-container py-8">
          <ProductDetailsCard beverage={beverage} />
          <div className="flex justify-center gap-4 mt-6">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
