import { useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import * as beverageService from "../../../services/beverage-service.ts";
import * as cartService from "../../../services/cart-service.ts";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useEffect, useState } from "react";
import { BeverageDTO } from "../../../models/beverage.ts";

export default function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const [beverage, setBeverage] = useState<BeverageDTO>();

  useEffect(() => {
    beverageService
      .findById(Number(params.beverageId))
      .then((response) => {
        setBeverage(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, []);

  function handleBuyClick() {
    if (beverage) {
      cartService.addBeverage(beverage);
      navigate("/cart");
    }
  }

  return (
    <>
      <main className="bg-bec-color-bg-primary min-h-screen">
        <section id="product-details-section" className="dsc-container py-8">
          {beverage && <ProductDetailsCard beverage={beverage} />}
          <div className="flex justify-center gap-4 mt-6">
            <div onClick={handleBuyClick}>
              <ButtonPrimary text="BUY" />
            </div>
            <ButtonInverse text="Start" />
          </div>
        </section>
      </main>
    </>
  );
}
