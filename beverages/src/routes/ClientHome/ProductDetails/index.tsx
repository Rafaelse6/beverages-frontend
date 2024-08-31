import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useEffect, useState } from "react";
import { BeverageDTO } from "../../../models/beverage.ts";
import axios from "axios";

export default function ProductDetails() {
  const params = useParams();

  const [beverage, setBeverage] = useState<BeverageDTO>();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/beverages/${params.beverageId}`)
      .then((response) => {
        console.log(response.data);
        setBeverage(response.data);
      });
  }, []);
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
