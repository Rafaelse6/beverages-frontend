import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as beverageService from "../../../services/beverage-service.ts";

export default function ProductDetails() {
  const params = useParams();

  const beverage = beverageService.findById(Number(params.beverageId));

  return (
    <>
      <main className="bg-bec-color-bg-primary min-h-screen">
        <section id="product-details-section" className="dsc-container py-8">
          {beverage && <ProductDetailsCard beverage={beverage} />}
          <div className="flex justify-center gap-4 mt-6">
            <ButtonPrimary text="BUY" />
            <ButtonInverse text="Start" />
          </div>
        </section>
      </main>
    </>
  );
}
